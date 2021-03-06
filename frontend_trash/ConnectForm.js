import React, { useState } from "react";
import ConnectMessage from "../../../models/Connect/connect";

import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import Button from "../../UI/Button/Button";
import styles from "./ConnectForm.module.css";

const initialErrorState = {
  show: false,
  title: "",
  message: "",
};

const ConnectForm = (props) => {
  //State Variables
  const [title, setTitle] = useState("");
  const [titleValid, setTitleValid] = useState(true);

  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState(true);

  const [mobile, setMobile] = useState(0);
  const [mobileValid, setMobileValid] = useState(true);

  const [message, setMessage] = useState("");
  const [messageValid, setMessageValid] = useState(true);

  const [formValid, setFormValid] = useState(false);

  const [errorState, setErrorState] = useState(initialErrorState);
  const [updateCount, setUpdateCount] = useState(0);

  //Enum
  const connectFields = {
    title: 1,
    name: 2,
    mobile: 3,
    message: 4,
  };

  //Handlers
  const fieldChangeHandler = (field, event) => {
    let value = event.target.value.trim();

    switch (field) {
      case connectFields.title:
        if (value.length > 0) {
          setTitleValid(true);
        }
        setTitle(event.target.value);
        break;
      case connectFields.name:
        if (value.length > 0) {
          setNameValid(true);
        }
        setName(event.target.value);
        break;
      case connectFields.mobile:
        if (value.length === 10) {
          setMobileValid(true);
        }
        setMobile(parseInt(event.target.value));
        break;
      case connectFields.message:
        if (value.length > 0) {
          setMessageValid(true);
        }
        setMessage(event.target.value);
        break;
      default:
        console.log("Incorrect Field Update");
    }
    setUpdateCount((prevCount) => {
      //Always pass a callback when you depend on the previous state,
      //since the process is asynchronous, and direct updates might end up depending on outdated state values.
      return prevCount + 1;
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault(); //This prevents the form from re-loading the page
    let sendFlag = true;
    if (title.trim().length === 0) {
      setTitleValid(false);
      sendFlag = false;
    }
    if (name.trim().length === 0) {
      setNameValid(false);
      sendFlag = false;
    }
    if (Math.floor(Math.log10(mobile)) + 1 !== 10) {
      setMobileValid(false);
      sendFlag = false;
    }
    if (message.trim().length === 0) {
      setMessageValid(false);
      sendFlag = false;
    }

    if (sendFlag) {
      props.sendMessage(title, name, mobile, message);
      //Reset
      setTitle("");
      setName("");
      setMobile(0);
      setMessage("");
    } else {
      setErrorState({
        show: true,
        title: "Invalid Input",
        message: "Please Enter Valid Input",
      });
    }
  };

  const errorConfirmHandler = (event) => {
    setErrorState(initialErrorState);
  };

  return (
    <React.Fragment>
      {errorState.show ? (
        <ErrorModal
          title={"Invalid Input"}
          message={"Please Enter valid input"}
          onConfirm={errorConfirmHandler}
        ></ErrorModal>
      ) : null}
      <form onSubmit={formSubmitHandler}>
        <div className={styles.connect__controls}>
          <div className={styles.connect__control}>
            <label>Title</label>
            <input
              className={titleValid ? "" : styles.invalid}
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className={styles.connect__control}>
            <label>Name</label>
            <input
              className={nameValid ? "" : styles.invalid}
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className={styles.connect__control}>
            <label>Mobile</label>
            <input
              className={mobileValid ? "" : styles.invalid}
              type="number"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
          </div>
          <div className={styles.connect__control}>
            <label>Message</label>
            <textarea
              className={messageValid ? "" : styles.invalid}
              type="number"
              value={message}
              rows={4}
              cols={50}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
        </div>
        <div className={styles.connect__actions}>
          {/* <button type="submit">Send Message</button> */}
          <Button type="submit" disabled={!formValid}>
            Send Message
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ConnectForm;
