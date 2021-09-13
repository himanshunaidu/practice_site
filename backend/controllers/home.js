const getHome = (req, res, next) => {
  res.json({ greeting: "Hello" });
};

module.exports = { getHome: getHome };
