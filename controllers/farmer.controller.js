const { response, request } = require('express');
const Farmer = require('../models/Farmer');

const createFarmer = async(req = request, res = response) => {

    try {

        const farmer = new Farmer(req.body);

        await farmer.save();

        return res.status(201).json({
            ok: true,
            message: 'Datos guardados',
            farmer
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            error,
            message: 'Error al crear campesino'
        });

    }

};

module.exports = {
    createFarmer
};