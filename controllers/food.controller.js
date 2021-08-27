const { response } = require('express');
const Food = require('../models/Food');

const getFoods = async(req, res = response) => {

    Food.find()
        .exec((err, foods) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err,
                    message: 'Error en el server'
                });
            }

            return res.status(200).json({
                ok: true,
                foods
            });
        });

};

module.exports = {
    getFoods
};