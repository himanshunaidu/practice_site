const Connect = require("../models/connect");

const getConnect = (req, res, next) => {
  res.json({ connect: "Himanshu Naidu" });
};

const saveConnect = (req, res, next) => {
  const newConnect = new Connect(
    req.body.name,
    req.body.connectBody?.mobile,
    req.body.connectBody?.dob,
    req.body.connectBody?.email
  );
  newConnect.save().then(async (connects) => {
    // let connectData = await Connect.fetchAllPromise();
    console.log(connects);
    res.status(200).json({
      status: "Success",
      allConnects: connects,
    });
  });
};

module.exports = { getConnect: getConnect, saveConnect: saveConnect };
