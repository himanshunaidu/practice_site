const Connect = require("../models/connect");

const getConnect = (req, res, next) => {
  // res.json({ connect: "Himanshu Naidu" });
  Connect.fetchAllPromise().then((connects) => {
    res.status(200).json({ connects: connects });
  });
};

const saveConnect = (req, res, next) => {
  console.log(req.body);
  const newConnect = new Connect(
    req.body.connectBody?.name,
    req.body.connectBody?.title,
    req.body.connectBody?.mobile,
    req.body.connectBody?.message
  );
  newConnect
    .save()
    .then((connects) => {
      // let connectData = await Connect.fetchAllPromise();
      console.log(connects);
      res.status(200).json({
        status: "Success",
      });
    })
    .catch((err) => {
      res.status(400).json({
        status: "Failure",
      });
    });
};

module.exports = { getConnect: getConnect, saveConnect: saveConnect };
