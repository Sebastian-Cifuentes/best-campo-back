const { Router } = require('express');
const { createBuyer } = require('../controllers/buyer.controller');
const router = Router();

router.post('/create', createBuyer);

module.exports = router;