import React, { useState } from "react";
import styles from "./Connect.module.css";
import ConnectForm from "./ConnectForm/ConnectForm";
import ConnectMessage from "../../models/Connect/connect";

const Connect = (props) => {
  const sendMessage = (title, name, mobile, message) => {
    const connectMessage = new ConnectMessage(title, name, mobile, message);
    console.log(connectMessage);
  };

  return (
    <React.Fragment>
      <div className={styles.connect}>
        <ConnectForm sendMessage={sendMessage}></ConnectForm>
      </div>
    </React.Fragment>
  );
};

export default Connect;
