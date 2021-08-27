const { Router } = require('express');
const { getFoods } = require('../controllers/food.controller');
const router = Router();

router.get('/', getFoods);

module.exports = router;