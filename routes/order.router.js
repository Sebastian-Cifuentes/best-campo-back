const { Router } = require('express');
const { createOrder, getByUser, getById } = require('../controllers/order.controller');
const router = Router();

router.get('/:id', getById);
router.get('/user/:userId', getByUser);
router.post('/create', createOrder);

module.exports = router;