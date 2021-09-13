const Contact = require("../models/contact");

const getContact = (req, res, next) => {
  res.json({ contact: "Himanshu Naidu" });
};

const saveContact = async (req, res, next) => {
  const newContact = new Contact(
    req.body.name,
    req.body.contactBody?.mobile,
    req.body.contactBody?.dob,
    req.body.contactBody?.email
  );
  newContact.save();
  let contactData = await Contact.fetchAll();
  res.status(200).json({ status: "Success", allContacts: contactData });
};

module.exports = { getContact: getContact, saveContact: saveContact };
