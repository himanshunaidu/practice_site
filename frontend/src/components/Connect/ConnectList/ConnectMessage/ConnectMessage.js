import React, { useState } from "react";

const ConnectMessage = (props) => {
  return (
    <div>
      <h2>{props.connect.title}</h2>
      <p>
        &emsp; {props.connect.name} - {props.connect.mobile}
      </p>
      <p>{props.connect.message}</p>
      <hr></hr>
    </div>
  );
};

export default ConnectMessage;
