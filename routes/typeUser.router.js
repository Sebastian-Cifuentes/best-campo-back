const { Router } = require('express');
const { getAll } = require('../controllers/typeUser.controller');
const router = Router();

router.get('/', getAll);

module.exports = router;