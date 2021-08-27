const { Router } = require('express');
const { register, login, forgotPassword, assignTypeUser } = require('../controllers/auth.controller');
const router = Router();

router.post('/login', login);

router.post('/register', register);

router.get('/forgot-password', forgotPassword);

router.patch('/assign-type-user/:id', assignTypeUser);

module.exports = router;