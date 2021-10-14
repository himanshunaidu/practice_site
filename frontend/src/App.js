// import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import ContactList from "./pages/ContactList/ContactList";
import Connect from "./pages/Connect/Connect";
import ContactContext from "./store/contact-context";
import { INITIAL_CONTACTS } from "./store/contact-context";
import * as actionTypes from "./store/actions/index";

const App = () => {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);

  //Redux
  const counter = useSelector((state) => {
    return state.counter;
  });
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const increment = setInterval(() => {
  //     dispatch({ type: actionTypes.checkCounter });
  //   }, 1000);
  //   return () => {
  //     clearTimeout(increment);
  //   };
  // }, [counter]);

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
