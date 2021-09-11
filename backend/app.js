const express = require('express');
const bodyParser = require('body-parser');

const homeRouter = require('./routes/home-routes');
const contactRouter = require('./routes/contact-routes');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', homeRouter);
app.use('/contact', contactRouter);

app.use((req, res, next) => {
    res.status(404).json({ status: "Page Not Found" });
})

module.exports = app;