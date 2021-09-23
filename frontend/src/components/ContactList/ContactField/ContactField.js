import React from "react";

import styles from "./ContactField.module.css";
import Card from "../../UI/Card/Card";

const ContactField = (props) => {
  return (
    <Card className={styles["contact-item"]}>
      {/* <div className={styles["contact-item__description"]}> */}
      <h2>{props.field}</h2>
      <div className={styles["contact-item__val"]} onClick={props.onClick}>
        {props.value}
      </div>
      {/* </div> */}
    </Card>
  );
};

export default ContactField;
