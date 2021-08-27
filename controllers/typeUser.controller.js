const { response, request } = require('express');
const TypeUser = require('../models/TypeUser');

const getAll = (req = request, res = response) => {

    TypeUser.find()
        .exec((err, typeUsers) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            return res.status(200).json({
                ok: true,
                typeUsers
            });
        });

};

module.exports = {
    getAll
};