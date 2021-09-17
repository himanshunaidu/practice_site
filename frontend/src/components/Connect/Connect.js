import React, { useState } from "react";
import "./Connect.css";
import ConnectForm from "./ConnectForm/ConnectForm";
import ConnectMessage from "../../models/Connect/connect";

const Connect = (props) => {
  const sendMessage = (title, name, mobile, message) => {
    const connectMessage = new ConnectMessage(title, name, mobile, message);
    console.log(connectMessage);
  };

  return (
    <div style={{ backgroundColor: "silver" }}>
      <div className="connect">
        <ConnectForm sendMessage={sendMessage}></ConnectForm>
      </div>
    </div>
  );
};

export default Connect;
