const { Schema, model } = require('mongoose');

const order = Schema({
    foods: [{
        name: {
            type: Schema.Types.ObjectId,
            ref: 'Food'
        },
        timeItTakes: {
            type: String
        }

    }],
    buyer: {
        type: Schema.Types.ObjectId,
        ref: 'Buyer',
        required: true
    },
    farmer: [{
        type: Schema.Types.ObjectId,
        ref: 'Farmer'
    }]
});

module.exports = model('Order', order);