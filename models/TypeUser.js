const { Schema, model } = require('mongoose');

const typeUserSchema = Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = model('TypeUser', typeUserSchema);