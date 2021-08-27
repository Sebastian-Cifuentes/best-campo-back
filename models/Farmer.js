const { Schema, model } = require('mongoose');

const farmer = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    foods: [{
        id: {
            type: String
        },
        onSale: {
            type: Boolean
        },
        dateHarvest: {
            type: String
        }
    }],
    hasTransport: {
        type: Boolean,
        required: true
    }
});

module.exports = model('Farmer', farmer);