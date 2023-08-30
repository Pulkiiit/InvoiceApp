const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    orderid: {
        type: Number,
        // required : true
    },
    customername: {
        type: String,
        // required : true
    },
    orderdate: {
        type: Date,
        // required : true
    },
    items: [{
        name: {
            type: String,
            // required : true
        },
        quantity: {
            type: Number,
            //required: true,
            min : 1
        },
        price: {
            type: Number,
            //required: true,
            min : 0
        }
    }]
})

module.exports = mongoose.model('Bill', dataSchema);