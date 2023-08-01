const express = require('express');
const router = express.Router();
const exercisesController = require('../controllers/exercises');

router.get('/', exercisesController.index);
router.get('/new', exercisesController.new);
router.post('/', exercisesController.create);

module.exports = router;