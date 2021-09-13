const express = require("express");
const bodyParser = require("body-parser");

const homeRouter = require("./routes/home");
const contactRouter = require("./routes/contact");
const errorRouter = require("./routes/error");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", homeRouter);
app.use("/contact", contactRouter);
app.use(errorRouter);

module.exports = app;
