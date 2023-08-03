const express = require('express');
const router = express.Router();
const exercisesController = require('../controllers/exercises');
const Workout = require('../models/workout');

router.get('/exercise', exercisesController.index); 
router.get('/new', exercisesController.new); 
router.post('/', exercisesController.create);
router.delete('/exercise/:id', exercisesController.delete);
router.get('/exercise/:id/edit', exercisesController.editForm);
router.put('/exercise/:id', exercisesController.update);


module.exports = router;
