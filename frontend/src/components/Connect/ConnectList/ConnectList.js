import React, { useState } from "react";
import ConnectMessage from "./ConnectMessage/ConnectMessage";

const ConnectList = (props) => {
  console.log("Connect List rendered");
  return (
    <React.Fragment>
      {props.connects.map((connect) => {
        console.log("Logging connect");
        return <ConnectMessage key={connect.id} connect={connect} />;
      })}
    </React.Fragment>
  );
};

export default ConnectList;
