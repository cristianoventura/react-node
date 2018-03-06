const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.get('/get', controllers.get);

module.exports = router;