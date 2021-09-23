// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import Connect from "./components/Connect/Connect";
import ContactContext from "./store/contact-context";
import { INITIAL_CONTACTS } from "./store/contact-context";

const App = () => {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);

  const changeContacts = (id) => {
    console.log("Changing");
    setContacts((cs) => {
      cs.forEach((c) => {
        if (c.id === id) {
          c.value = "Hello";
        }
      });
      return [...cs];
    });
  };

  return (
    <div className="App">
      <ContactContext.Provider
        value={{ contacts: contacts, changeContacts: changeContacts }}
      >
        <Connect></Connect>
        <ContactList></ContactList>
      </ContactContext.Provider>
    </div>
  );
};

export default App;
