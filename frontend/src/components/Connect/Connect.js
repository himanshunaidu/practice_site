import React, { useState } from "react";
import "./Connect.css";
import ConnectForm from "./ConnectForm/ConnectForm";

const Connect = (props) => {
  return (
    <div style={{ backgroundColor: "silver" }}>
      <div className="connect">
        <ConnectForm></ConnectForm>
      </div>
    </div>
  );
};

export default Connect;
