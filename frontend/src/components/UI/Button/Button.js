import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  const defaultClick = (e) => {};

  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      disabled={props.disabled}
      onClick={props.onClick || defaultClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
