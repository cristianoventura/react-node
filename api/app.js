const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

const routes = require('./routes');
const middleware = require('./middleware');

const app = express();
app.use(middleware);
app.use('/', routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT || 7000, () => {
    console.log(`✅ Server running on port ${process.env.PORT}`);
});