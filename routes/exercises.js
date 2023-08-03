const express = require('express');
const router = express.Router();
const exercisesController = require('../controllers/exercises');
const Workout = require('../models/workout');
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.get('/exercise', exercisesController.index); 
router.get('/new', ensureLoggedIn, exercisesController.new); 
router.post('/', ensureLoggedIn, exercisesController.create);
router.delete('/exercise/:id', ensureLoggedIn, exercisesController.delete);
router.get('/exercise/:id/edit', ensureLoggedIn, exercisesController.editForm);
router.put('/exercise/:id', ensureLoggedIn, exercisesController.update);


module.exports = router;
