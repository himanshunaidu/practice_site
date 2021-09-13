const get404 = (req, res, next) => {
  res.status(404).json({ status: "Service Not Found" });
};

module.exports = { get404: get404 };
