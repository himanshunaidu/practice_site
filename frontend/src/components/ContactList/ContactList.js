import React, { useState } from "react";

import "./ContactList.css";
import ContactField from "./ContactField/ContactField";

const INITIAL_CONTACTS = [
  {
    id: "e1",
    field: "Name",
    value: "Himanshu Naidu",
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    field: "Mobile No.",
    value: 9999999999,
  },
  {
    id: "e3",
    field: "DOB",
    value: new Date(1997, 0, 1).toLocaleString(),
  },
];

const Contact = (props) => {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);

  return (
    <div className="contact-list">
      {contacts.map((contactField) => {
        return (
          <ContactField
            key={contactField.id} //key will be a unique identifier. Do not use index of array element as that can change
            field={contactField.field}
            value={contactField.value}
          ></ContactField>
        );
      })}
      {/* <div>
        <button onClick={listButtonClickHandler}>Log Contact</button> {counter}
      </div> */}
    </div>
  );
};

export default Contact;
