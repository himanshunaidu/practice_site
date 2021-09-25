const express = require("express");
const router = express.Router();

const connectController = require("../controllers/connect");

router.get("/", connectController.getConnect);

router.post("/save", connectController.saveConnect);

module.exports = router;
