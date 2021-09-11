import React from "react";
import "./Contact.css";

function Contact(props) {
  return (
    <div className="contact-item">
      <div className="contact-item__description">
        <h2>{props.field}</h2>
        <div className="contact-item__val">{props.value}</div>
      </div>
    </div>
  );
}

export default Contact;
