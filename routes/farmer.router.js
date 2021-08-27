const { Router } = require('express');
const { createFarmer } = require('../controllers/farmer.controller');
const router = Router();

router.post('/create', createFarmer);

module.exports = router;