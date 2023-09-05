const path = require('path');
const Bill = require('../models/billing');

const generateInvoice = async (req, res) => {
    // res.send(req.params.id);
    const data = await Bill.findOne({ orderid: `${req.params.id}` }).exec();

    res.render(path.join(__dirname, '..', 'views', 'index.ejs'), {
        idArr: false,
        invoice: false
    });
};

module.exports = { generateInvoice };