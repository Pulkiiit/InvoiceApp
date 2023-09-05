const express = require('express');
const router = express.Router();
const invoice = require('../controllers/invoice');

router.get('/:id', invoice.generateInvoice);

module.exports = router;