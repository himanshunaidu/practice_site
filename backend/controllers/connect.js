const Connect = require("../models/connect");

const getConnects = (req, res, next) => {
  // res.json({ connect: "Himanshu Naidu" });
  Connect.fetchAllPromise().then((connects) => {
    res.status(200).json({ connects: connects });
  });
};

const getConnect = (req, res, next) => {
  Connect.fetchByIdPromise(req.params.connectId)
    .then((connect) => {
      res.status(200).json({ connect: connect });
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
};

const saveConnect = (req, res, next) => {
  console.log(req.body);
  const newConnect = new Connect(
    req.body.connectBody?.title,
    req.body.connectBody?.name,
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
      res.status(500).json({
        status: "Failure",
      });
    });
};

module.exports = {
  getConnects: getConnects,
  getConnect: getConnect,
  saveConnect: saveConnect,
};
