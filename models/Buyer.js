const { Schema, model } = require('mongoose');

const buyer = Schema({
    foods: [{
        type: Schema.Types.ObjectId,
        unique: true,
        ref: 'Food'
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    hasTransport: {
        type: Boolean,
        required: true
    }
});

module.exports = model('Buyer', buyer);