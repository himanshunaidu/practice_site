const getContact = (req, res, next) => {
  res.json({ contact: "Himanshu Naidu" });
};

module.exports = { getContact: getContact };
