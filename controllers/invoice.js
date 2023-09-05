const path = require('path');
const Bill = require('../models/billing');

const generateInvoice = async (req, res) => {
    //res.send(req.params.id);
    //const id = req.params.id;
    //console.log(req.params);
    const invoice = await Bill.find({ orderid: `${req.params.id}` }).exec();
    //console.log(invoice);
    res.render(path.join(__dirname, '..', 'views', 'index.ejs'), {
        idArr: false,
        invoice: invoice
    });
};

module.exports = { generateInvoice };