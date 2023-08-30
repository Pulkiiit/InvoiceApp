const express = require('express');
const router = express.Router();
const uploadData = require('../controllers/uploadData');

router.use('/',uploadData.fillData);

module.exports = router;