const { Schema, model } = require('mongoose');

const state = Schema({
    name: {
        type: String,
        required: true
    },
    parent: {
        type: Schema.Types.ObjectId,
        ref: 'State'
    },
    childrens: [{
        id: {
            type: Schema.Types.ObjectId,
            ref: 'State'
        },
        name: {
            tpye: String
        }
    }],
    isFinish: {
        type: Boolean
    }
});

module.exports = model('State', state);