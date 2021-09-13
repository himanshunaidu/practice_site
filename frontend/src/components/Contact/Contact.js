import React from "react";

import "./Contact.css";
import Card from "../UI/Card/Card";

function Contact(props) {
  return (
    <Card className="contact-item">
      {/* <div className="contact-item__description"> */}
      <h2>{props.field}</h2>
      <div className="contact-item__val">{props.value}</div>
      {/* </div> */}
    </Card>
  );
}

export default Contact;
