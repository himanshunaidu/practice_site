import React, { useState } from "react";
import styles from "./Connect.module.css";
import ConnectForm from "./ConnectForm/ConnectForm";
import ConnectList from "./ConnectList/ConnectList";
import ConnectMessage from "../../models/Connect/connect";

const INITIAL_MESSAGES = [];

const Connect = (props) => {
  const [connects, setConnects] = useState(INITIAL_MESSAGES);

  const sendMessage = (title, name, mobile, message) => {
    const connectMessage = new ConnectMessage(title, name, mobile, message);
    setConnects((prevConnects) => {
      let newConnects = [...prevConnects, connectMessage];
      return newConnects;
    });
  };

  return (
    <React.Fragment>
      <div className={styles.connect}>
        <ConnectForm sendMessage={sendMessage}></ConnectForm>
        <hr></hr>
        <ConnectList connects={connects}></ConnectList>
      </div>
    </React.Fragment>
  );
};

export default Connect;
