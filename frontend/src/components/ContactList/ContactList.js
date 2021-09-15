import React, { useState } from "react";

import "./ContactList.css";
import ContactField from "./ContactField/ContactField";

const Contact = (props) => {
  const [counter, setCounter] = useState(0);

  const listButtonClickHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="contact-list">
      {props.contactDetails.map((contactField) => {
        return (
          <ContactField
            key={contactField.id}
            field={contactField.field}
            value={contactField.value}
          ></ContactField>
        );
      })}
      <div>
        <button onClick={listButtonClickHandler}>Log Contact</button> {counter}
      </div>
    </div>
  );
};

export default Contact;
