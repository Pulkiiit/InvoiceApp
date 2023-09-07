const express = require('express');
const router = express.Router();
const downloadInvoice = require('../controllers/downloadInvoice');

router.post('/', downloadInvoice.downloadpage);

module.exports = router;