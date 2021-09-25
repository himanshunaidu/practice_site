const express = require("express");
const bodyParser = require("body-parser");

const homeRouter = require("./routes/home");
const connectRouter = require("./routes/connect");
const errorRouter = require("./routes/error");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/connect", connectRouter);
app.use("/", homeRouter);
app.use(errorRouter);

module.exports = app;
