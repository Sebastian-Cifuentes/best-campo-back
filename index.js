const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();

// app.use(express.static('public'));

//CORS
app.use(cors());

//Lectura
app.use(express.json());

app.use('/auth', require('./routes/auth.router'));
app.use('/farmer', require('./routes/farmer.router'));
app.use('/buyer', require('./routes/buyer.router'));
app.use('/foods', require('./routes/food.router'));
app.use('/type-user', require('./routes/typeUser.router'));
app.use('/order', require('./routes/order.router'));
app.use('/states', require('./routes/state.router'));

// Connect to database
mongoose.connection.openUri(process.env.MONGODB_URI || 'mongodb://localhost:27017/bestCampo', (err, res) => {
    if (err) throw err;
    console.log('Data base: \x1b[32m%s\x1b[0m', 'online');
});

app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Back corriendo en el puerto ${process.env.PORT}`);
});