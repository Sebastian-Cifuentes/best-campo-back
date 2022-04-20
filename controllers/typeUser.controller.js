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

const getById = async(req = request, res = response) => {

    const { id } = req.params;

    const typeUser = await TypeUser.findById({ _id: id });

    if (!typeUser) {
        return res.status(400).json({
            ok: false
        });
    }

    return res.json({
        ok: true,
        typeUser
    });

};

module.exports = {
    getAll,
    getById
};