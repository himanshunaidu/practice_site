const express = require("express");
const router = express.Router();

const contactController = require("../controllers/contact");

router.get("/", contactController.getContact);

router.post("/save", contactController.saveContact);

module.exports = router;
