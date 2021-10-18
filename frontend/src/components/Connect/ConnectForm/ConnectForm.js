import React, { useEffect, useState, useReducer, useCallback } from "react";
import { Prompt } from "react-router-dom";

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
const inputActions = {
  userInput: "USER_INPUT",
  default: "DEFAULT",
};

const titleReducer = (state, action) => {
  if (action.type === inputActions.userInput) {
    return {
      value: action.val,
      isValid: action.val.trim().length !== 0,
      isTouched: true,
    };
  }
  return { value: "", isValid: false, isTouched: false };
};

const nameReducer = (state, action) => {
  if (action.type === inputActions.userInput) {
    return {
      value: action.val,
      isValid: action.val.trim().length !== 0,
      isTouched: true,
    };
  }
  return { value: "", isValid: false, isTouched: false };
};

const mobileReducer = (state, action) => {
  if (action.type === inputActions.userInput) {
    return {
      value: action.val,
      isValid: action.val.length === 10,
      isTouched: true,
    };
  }
  return { value: "", isValid: false, isTouched: false };
};

const ConnectForm = (props) => {
  //State Variables
  const [isFocused, setIsFocused] = useState(false);

  //useReducer in this case
  // const [title, setTitle] = useState("");
  // const [titleValid, setTitleValid] = useState(false);
  const [titleState, dispatchTitle] = useReducer(titleReducer, {
    value: "",
    isValid: false,
    isTouched: false,
  });

  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: "",
    isValid: false,
    isTouched: false,
  });

  const [mobileState, dispatchMobile] = useReducer(mobileReducer, {
    value: "",
    isValid: false,
    isTouched: false,
  });

  //Message can be zero-length
  const [message, setMessage] = useState("");
  // const [messageValid, setMessageValid] = useState(false);

  // const [formValid, setFormValid] = useState(false);
  let formValid =
    titleState.isValid && nameState.isValid && mobileState.isValid;

  const [errorState, setErrorState] = useState(initialErrorState);

  const formSubmitHandler = (event) => {
    event.preventDefault(); //This prevents the form from re-loading the page
    if (formValid) {
      props.sendMessage(
        titleState.value,
        nameState.value,
        mobileState.value,
        message
      );
      //Reset
      // setTitle("");
      dispatchTitle({ type: inputActions.default });
      dispatchName({ type: inputActions.default });
      dispatchMobile({ type: inputActions.default });
      setMessage("");
      setIsFocused(false);
    } else {
      //Since we have now added useEffect validation that disables the button, this is just a fail-safe now
      setErrorState({
        show: true,
        title: "Unexpected Error Occurred",
        message: "Please Enter Valid Input",
      });
    }
  };

  const formFocusHandler = (event) => {
    setIsFocused(true);
  };

  const errorConfirmHandler = (event) => {
    setErrorState(initialErrorState);
  };

  return (
    <React.Fragment>
      <Prompt
        when={isFocused}
        message={(location) =>
          "Form has changed. Are you sure you want to leave?"
        }
      />
      {errorState.show ? (
        <ErrorModal
          title={errorState.title}
          message={errorState.message}
          onConfirm={errorConfirmHandler}
        ></ErrorModal>
      ) : null}
      <form onSubmit={formSubmitHandler} onFocus={formFocusHandler}>
        <div className={styles.connect__controls}>
          <div className={styles.connect__control}>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              className={
                !titleState.isValid && titleState.isTouched
                  ? styles.invalid
                  : ""
              }
              type="text"
              value={titleState.value}
              onChange={(e) => {
                dispatchTitle({
                  type: inputActions.userInput,
                  val: e.target.value,
                });
              }}
            />
          </div>
          <div className={styles.connect__control}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className={
                !nameState.isValid && nameState.isTouched ? styles.invalid : ""
              }
              type="text"
              value={nameState.value}
              onChange={(e) => {
                dispatchName({
                  type: inputActions.userInput,
                  val: e.target.value,
                });
              }}
            />
          </div>
          <div className={styles.connect__control}>
            <label htmlFor="mobile">Mobile</label>
            <input
              id="mobile"
              className={
                !mobileState.isValid && mobileState.isTouched
                  ? styles.invalid
                  : ""
              }
              type="number"
              value={mobileState.value}
              onChange={(e) => {
                dispatchMobile({
                  type: inputActions.userInput,
                  val: e.target.value,
                });
              }}
            />
          </div>
          <div className={styles.connect__control}>
            <label htmlFor="message">Message</label>
            <textarea
              // className={messageValid ? "" : styles.invalid}
              id="message"
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
