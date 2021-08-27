const { response, request } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateJwt } = require('../helpers/jwt');

const register = async(req, res = response) => {

    const { email, phone, password } = req.body;

    try {

        const user = await User.findOne({ email });
        const userp = await User.findOne({ phone });

        if (userp) {
            return res.status(400).json({
                ok: false,
                message: 'El numero de télefono ya existe'
            });
        }

        if (user) {
            return res.status(400).json({
                ok: false,
                message: 'El usuario ya existe'
            });
        }

        const newUser = new User(req.body);

        const salt = bcrypt.genSaltSync();
        newUser.password = bcrypt.hashSync(password, salt);

        await newUser.save();

        return res.status(201).json({
            ok: true,
            user: newUser,
            message: 'El usuario ha sido creado'
        });

    } catch (err) {

        return res.status(500).json({
            ok: false,
            err,
            message: 'Error al crear el usuario'
        });

    }

};

const login = async(req, res = response) => {

    const { email, password } = req.body;
    console.log(req.body);

    try {

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(200).json({
                ok: false,
                message: 'Error al encontrar el user'
            });
        }

        const validatePassword = bcrypt.compareSync(password, user.password);

        if (!validatePassword) {
            return res.status(400).json({
                ok: false,
                message: 'La contraseña no es valida'
            });
        }

        const token = await generateJwt(user._id, user.email);

        return res.json({
            ok: true,
            user,
            token
        });


    } catch (err) {
        return res.status(500).json({
            ok: false,
            err
        });
    }
};

const forgotPassword = (req, res = response) => {

    const { email, password } = req.body;

    return res.status(200).json({
        ok: true,
        message: 'Forgot Password api'
    });
};

const assignTypeUser = async(req = request, res = response) => {

    try {

        const { id } = req.params;
        const { typeUserId } = req.query;

        const user = await User.findById({ _id: id });

        user.typeUser = typeUserId;

        await user.save();

        return res.status(200).json({
            ok: true
        });

    } catch (err) {

        return res.status(500).json({
            ok: false,
            err
        });

    }

};

module.exports = {
    register,
    login,
    forgotPassword,
    assignTypeUser
};