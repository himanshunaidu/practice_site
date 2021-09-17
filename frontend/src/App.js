// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Contact from "./components/ContactList/ContactList";
import Connect from "./components/Connect/Connect";

const App = () => {
  console.log(React.version);

  return (
    <div className="App">
      <Connect></Connect>
      <Contact></Contact>
    </div>
  );
};

export default App;
