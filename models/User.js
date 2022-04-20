const { Schema, model } = require('mongoose');

const userSchema = Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    typeUser: {
        type: Schema.Types.ObjectId,
        ref: 'TypeUser'
    },
    data: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = model('user', userSchema);