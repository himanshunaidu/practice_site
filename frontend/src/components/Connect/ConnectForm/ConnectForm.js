import React, { useEffect, useState } from "react";
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
  const [titleValid, setTitleValid] = useState(false);

  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState(false);

  const [mobile, setMobile] = useState(0);
  const [mobileValid, setMobileValid] = useState(false);

  const [message, setMessage] = useState("");
  const [messageValid, setMessageValid] = useState(false);

  const [formValid, setFormValid] = useState(false);

  const [errorState, setErrorState] = useState(initialErrorState);

  //Enum (Not useful anymore)
  const connectFields = {
    title: 1,
    name: 2,
    mobile: 3,
    message: 4,
  };

  //Validation useEffect
  useEffect(() => {
    const debouncer = setTimeout(() => {
      let titleValidLoc = title.trim().length === 0;
      let nameValidLoc = name.trim().length === 0;
      let mobileValidLoc = Math.floor(Math.log10(mobile)) + 1 !== 10;
      let messageValidLoc = message.trim().length === 0;

      setTitleValid(!titleValidLoc);
      setNameValid(!nameValidLoc);
      setMobileValid(!mobileValidLoc);
      setMessageValid(!messageValidLoc);

      setFormValid(
        !(titleValidLoc || nameValidLoc || mobileValidLoc || messageValidLoc)
      );
    }, 500);
    return () => {
      clearTimeout(debouncer);
    };
  }, [title, name, mobile, message]);

  const formSubmitHandler = (event) => {
    event.preventDefault(); //This prevents the form from re-loading the page
    if (formValid) {
      props.sendMessage(title, name, mobile, message);
      //Reset
      setTitle("");
      setName("");
      setMobile(0);
      setMessage("");
    } else {
      //Since we have now added useEffect validation that disables the button, this is just a fail-safe now
      setErrorState({
        show: true,
        title: "Unexpected Error Occurred",
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
