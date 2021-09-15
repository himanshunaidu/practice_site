import React from "react";
import "./ConnectForm.css";

const ConnectForm = (props) => {
  return (
    <form>
      <div className="connect__controls">
        <div className="connect__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="connect__control">
          <label>Name</label>
          <input type="text" />
        </div>
        <div className="connect__control">
          <label>Mobile</label>
          <input type="number" />
        </div>
        <div className="connect__control">
          <label>Message</label>
          <textarea type="number" rows={4} cols={50} />
        </div>
      </div>
      <div className="connect__actions">
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
};

export default ConnectForm;
