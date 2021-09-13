const Contact = require("../models/contact");

const getContact = (req, res, next) => {
  res.json({ contact: "Himanshu Naidu" });
};

const saveContact = (req, res, next) => {
  const newContact = new Contact(
    req.body.name,
    req.body.contactBody?.mobile,
    req.body.contactBody?.dob,
    req.body.contactBody?.email
  );
  newContact.save().then(async (contacts) => {
    // let contactData = await Contact.fetchAllPromise();
    console.log(contacts);
    res.status(200).json({
      status: "Success",
      allContacts: contacts,
    });
  });
};

module.exports = { getContact: getContact, saveContact: saveContact };
