import React, { useEffect, useState, useReducer } from "react";
import ConnectMessage from "../../../models/Connect/connect";

import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import Button from "../../UI/Button/Button";
import styles from "./ConnectForm.module.css";

const initialErrorState = {
  show: false,
  title: "",
  message: "",
};

//Reducer for the title state. Can be defined outside the component as it does not depend on the component
//Enum
const titleActions = {
  userInput: "USER_INPUT",
  default: "DEFAULT",
  mobile: 3,
  message: 4,
};

const titleReducer = (state, action) => {
  if (action.type === titleActions.userInput) {
    return { value: action.val, isValid: action.val.trim().length !== 0 };
  }
  return { value: "", isValid: false };
};

const ConnectForm = (props) => {
  //State Variables

  //useReducer in this case
  // const [title, setTitle] = useState("");
  // const [titleValid, setTitleValid] = useState(false);
  const [titleState, dispatchTitle] = useReducer(titleReducer, {
    value: "",
    isValid: false,
  });

  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState(false);

  const [mobile, setMobile] = useState(0);
  const [mobileValid, setMobileValid] = useState(false);

  const [message, setMessage] = useState("");
  const [messageValid, setMessageValid] = useState(false);

  const [formValid, setFormValid] = useState(false);

  const [errorState, setErrorState] = useState(initialErrorState);

  //Validation useEffect
  useEffect(() => {
    const debouncer = setTimeout(() => {
      // let titleValidLoc = titleState.value.trim().length === 0;
      let nameValidLoc = name.trim().length === 0;
      let mobileValidLoc = Math.floor(Math.log10(mobile)) + 1 !== 10;
      let messageValidLoc = message.trim().length === 0;

      // setTitleValid(!titleValidLoc);
      setNameValid(!nameValidLoc);
      setMobileValid(!mobileValidLoc);
      setMessageValid(!messageValidLoc);
      // console.log(titleState);

      setFormValid(
        !(
          !titleState.isValid ||
          nameValidLoc ||
          mobileValidLoc ||
          messageValidLoc
        )
      );
    }, 500);
    return () => {
      clearTimeout(debouncer);
    };
  }, [titleState.isValid, name, mobile, message]);

  const formSubmitHandler = (event) => {
    event.preventDefault(); //This prevents the form from re-loading the page
    if (formValid) {
      props.sendMessage(titleState.value, name, mobile, message);
      //Reset
      // setTitle("");
      dispatchTitle({ type: titleActions.default });
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
              className={titleState.isValid ? "" : styles.invalid}
              type="text"
              value={titleState.value}
              onChange={(e) => {
                dispatchTitle({
                  type: titleActions.userInput,
                  val: e.target.value,
                });
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
