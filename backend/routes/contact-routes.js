const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ contact: "Himanshu Naidu" });
});

module.exports = router;
