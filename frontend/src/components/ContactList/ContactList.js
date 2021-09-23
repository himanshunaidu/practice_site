import React, { useState, useContext } from "react";

import styles from "./ContactList.module.css";
import ContactField from "./ContactField/ContactField";
import ContactContext from "../../store/contact-context";

const Contact = (props) => {
  // const [contacts, setContacts] = useState(INITIAL_CONTACTS);
  const ctx = useContext(ContactContext);

  return (
    <div className={styles["contact-list"]}>
      {ctx.contacts.map((contactField) => {
        return (
          <ContactField
            key={contactField.id} //key will be a unique identifier. Do not use index of array element as that can change
            field={contactField.field}
            value={contactField.value}
            onClick={() => ctx.changeContacts(contactField.id)}
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
