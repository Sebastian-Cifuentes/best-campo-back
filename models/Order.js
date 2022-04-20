const { Schema, model } = require('mongoose');

const order = Schema({
    foods: [{
        id: {
            type: Schema.Types.ObjectId,
            ref: 'Food'
        },
        name: {
            type: String
        },
        quantity: {
            type: String
        }
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    deliveryTime: {
        type: String
    },
    code: {
        type: Number
    },
    state: {
        type: String
    }
});

module.exports = model('Order', order);