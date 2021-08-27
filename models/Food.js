const { Schema, model } = require('mongoose');

const food = Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = model('Food', food);