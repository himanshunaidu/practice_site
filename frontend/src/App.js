// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Contact from "./components/ContactList/ContactList";
import Connect from "./components/Connect/Connect";

const App = () => {
  const contacts = [
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

  console.log(React.version);

  return (
    <div className="App">
      <Connect></Connect>
      <Contact contactDetails={contacts}></Contact>
    </div>
  );
};

export default App;
