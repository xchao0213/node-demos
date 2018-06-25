const express = require('express');

// const sign = require('./controllers/sign');
const site = require('./controllers/site')

var router = express.Router();

router.get('/',site.index);

module.exports = router;