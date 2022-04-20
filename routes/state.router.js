const { Router } = require('express');
const { getById, getAll } = require('../controllers/state.controller');
const router = Router();

router.get('/:id', getById);
router.get('', getAll);

module.exports = router;