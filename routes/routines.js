const express = require('express');
const router = express.Router();
const routinesController = require('../controllers/routines');
const exercisesRouter = require('./exercises');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// Route for creating a new routine
router.get('/new', ensureLoggedIn, routinesController.new);
router.post('/', ensureLoggedIn, routinesController.create);

// Route for viewing training routines
router.get('/', routinesController.index);

// Route for editing a routine
router.get('/:id/edit', ensureLoggedIn, routinesController.edit);
// Route for updating a routine
router.put('/:id', ensureLoggedIn, routinesController.update);
// Route for deleting a routine
router.delete('/:id', routinesController.delete);

// Include the exercisesRouter
router.use('/:id/exercises', exercisesRouter);

module.exports = router;
