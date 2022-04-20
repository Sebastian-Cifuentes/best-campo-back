const { request, response } = require('express');
const State = require('../models/State');

const getAll = async(req = request, res = response) => {

    // State.find()
    //     .exec((err, states) => {
    //         if (err) {
    //             return res.status(500).json({
    //                 ok: false,
    //                 err,
    //                 message: 'Error en el server'
    //             });
    //         }

    //         return res.status(200).json({
    //             ok: true,
    //             states
    //         });
    //     });

};

const getById = async(req = request, res = response) => {

    // const { id } = req.params;

    // try {

    //     const state = await State.findById({ _id: id });

    //     if (!state) {
    //         return res.status(400).json({
    //             ok: false,
    //             messgae: 'No existe!'
    //         });
    //     }

    //     return res.json({
    //         ok: true,
    //         state
    //     });

    // } catch (err) {
    //     return res.status(500).json({
    //         ok: false,
    //         err
    //     });
    // }

};

module.exports = {
    getAll,
    getById
};