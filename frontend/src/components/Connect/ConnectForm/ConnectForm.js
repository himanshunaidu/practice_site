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
const inputActions = {
  userInput: "USER_INPUT",
  default: "DEFAULT",
};

const titleReducer = (state, action) => {
  if (action.type === inputActions.userInput) {
    return { value: action.val, isValid: action.val.trim().length !== 0 };
  }
  return { value: "", isValid: false };
};

const nameReducer = (state, action) => {
  if (action.type === inputActions.userInput) {
    return { value: action.val, isValid: action.val.trim().length !== 0 };
  }
  return { value: "", isValid: false };
};

const mobileReducer = (state, action) => {
  if (action.type === inputActions.userInput) {
    return { value: action.val, isValid: action.val.length === 10 };
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

  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: "",
    isValid: false,
  });

  const [mobileState, dispatchMobile] = useReducer(mobileReducer, {
    value: "",
    isValid: false,
  });

  //Message can be zero-length
  const [message, setMessage] = useState("");
  // const [messageValid, setMessageValid] = useState(false);

  const [formValid, setFormValid] = useState(false);

  const [errorState, setErrorState] = useState(initialErrorState);

  //Validation useEffect
  useEffect(() => {
    const debouncer = setTimeout(() => {
      setFormValid(
        titleState.isValid && nameState.isValid && mobileState.isValid
      );
    }, 500);
    return () => {
      clearTimeout(debouncer);
    };
  }, [titleState.isValid, nameState.isValid, mobileState.isValid]);

  const formSubmitHandler = (event) => {
    event.preventDefault(); //This prevents the form from re-loading the page
    if (formValid) {
      props.sendMessage(titleState.value, name, mobile, message);
      //Reset
      // setTitle("");
      dispatchTitle({ type: inputActions.default });
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
          title={errorState.title}
          message={errorState.message}
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
                  type: inputActions.userInput,
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
