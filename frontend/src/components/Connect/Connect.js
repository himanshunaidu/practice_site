import React, { useEffect, useState, useCallback } from "react";

import styles from "./Connect.module.css";
import ConnectForm from "./ConnectForm/ConnectForm";
import ConnectList from "./ConnectList/ConnectList";
import ConnectMessage from "../../models/Connect/connect";
import axios from "../../axios";

const INITIAL_MESSAGES = [];

const Connect = (props) => {
  const [connects, setConnects] = useState(INITIAL_MESSAGES);

  const getConnectMessages = useCallback(() => {
    axios.get("/connect").then((result) => {
      setConnects(result.data.connects);
    });
  });

  useEffect(() => {
    getConnectMessages();
  }, []);

  //Thought experiment to check efficacy of React.memo. To see if Connect changes if contacts list changes
  const sendMessage = useCallback((title, name, mobile, message) => {
    const connectMessage = new ConnectMessage(title, name, mobile, message);
    axios
      .post("/connect/save", { connectBody: connectMessage })
      .then((result) => {
        if (result.data.status === "Success") {
          console.log("Success");
          getConnectMessages();
        }
      })
      .catch(() => {
        console.log("Error Inserting the Message");
      });
  }, []);

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

export default React.memo(Connect); //memoizes the component so that it only re-executes if a prop changes
