const { response } = require("express");
const Buyer = require('../models/Buyer');

const createBuyer = async(req, res = response) => {

    try {

        const buyer = new Buyer(req.body);

        await buyer.save();

        res.status(201).json({
            ok: true,
            message: 'Datos guardados'
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            error,
            message: 'Error al crear el comprador'
        });
    }

};

module.exports = {
    createBuyer
};