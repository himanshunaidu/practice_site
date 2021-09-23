import React from "react";

export const INITIAL_CONTACTS = [
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

const ContactContext = React.createContext({
  contacts: [],
  changeContacts: () => {},
});

export default ContactContext;
