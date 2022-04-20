const { request, response } = require('express');
const Order = require('../models/Order');

const getById = async(req = request, res = response) => {

    const { id } = req.params;

    const order = await Order.findById({ _id: id });

    if (!order) {
        return res.status(404).json({
            ok: false,
            message: 'La orden no existe'
        });
    }

    return res.status(200).json({
        ok: true,
        order
    });

};

const getByUser = async(req = request, res = response) => {

    const { userId } = req.params;

    Order.find({ user: userId })
        .exec((err, orders) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    error
                });
            }

            return res.status(200).json({
                ok: true,
                orders
            });
        });
};

const createOrder = async(req = request, res = response) => {

    try {

        const order = new Order(req.body);
        await order.save();

        return res.status(201).json({
            ok: true,
            order
        });

    } catch (error) {

        return res.status(500).json({
            ok: false,
            error,
            message: 'Error en el servidor'
        });

    }

};

module.exports = {
    createOrder,
    getByUser,
    getById
};