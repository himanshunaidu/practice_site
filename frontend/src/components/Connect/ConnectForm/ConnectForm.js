import React, { useState } from "react";
import "./ConnectForm.css";
import ConnectMessage from "../../../models/Connect/connect";

const ConnectForm = (props) => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState(0);
  const [message, setMessage] = useState("");
  const [updateCount, setUpdateCount] = useState(0);

  const connectFields = {
    title: 1,
    name: 2,
    mobile: 3,
    message: 4,
  };

  const fieldChangeHandler = (field, event) => {
    console.log("Field Changed", event.target.value);
    switch (field) {
      case connectFields.title:
        setTitle(event.target.value);
        break;
      case connectFields.name:
        setName(event.target.value);
        break;
      case connectFields.mobile:
        setMobile(event.target.value);
        break;
      case connectFields.message:
        setMessage(event.target.value);
        break;
      default:
        console.log("Incorrect Field Update");
    }
    setUpdateCount((prevCount) => {
      //Always pass a callback when you depend on the previous state,
      //since the process is asynchronous, and direct updates might end up depending on outdated state values.
      return prevCount + 1;
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault(); //This prevents the form from re-loading the page
    props.sendMessage(title, name, mobile, message);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="connect__controls">
        <div className="connect__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              fieldChangeHandler(connectFields.title, e);
            }}
          />
        </div>
        <div className="connect__control">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              fieldChangeHandler(connectFields.name, e);
            }}
          />
        </div>
        <div className="connect__control">
          <label>Mobile</label>
          <input
            type="number"
            value={mobile}
            onChange={(e) => {
              fieldChangeHandler(connectFields.mobile, e);
            }}
          />
        </div>
        <div className="connect__control">
          <label>Message</label>
          <textarea
            type="number"
            value={message}
            rows={4}
            cols={50}
            onChange={(e) => {
              fieldChangeHandler(connectFields.message, e);
            }}
          />
        </div>
      </div>
      <div className="connect__actions">
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
};

export default ConnectForm;
