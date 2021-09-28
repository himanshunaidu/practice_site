import React, { useState } from "react";
import ConnectMessage from "./ConnectMessage/ConnectMessage";

const ConnectList = (props) => {
  return (
    <React.Fragment>
      {props.connects.map((connect) => {
        return <ConnectMessage key={connect.id} connect={connect} />;
      })}
    </React.Fragment>
  );
};

export default ConnectList;
