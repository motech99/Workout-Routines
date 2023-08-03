const express = require('express');
const router = express.Router();
const exercisesController = require('../controllers/exercises');
const Workout = require('../models/workout');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// Route to display all exercises
router.get('/exercise', exercisesController.index);

// Route to display form for adding a new exercise
router.get('/new', ensureLoggedIn, exercisesController.new);

// Route to handle creation of a new exercise
router.post('/', ensureLoggedIn, exercisesController.create);

// Route to handle exercise deletion
router.delete('/exercise/:id', ensureLoggedIn, exercisesController.delete);

// Route to display form for editing an existing exercise
router.get('/exercise/:id/edit', ensureLoggedIn, exercisesController.editForm);

// Route to handle updating an existing exercise
router.put('/exercise/:id', ensureLoggedIn, exercisesController.update);

module.exports = router;
