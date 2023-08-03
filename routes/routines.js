const express = require('express');
const router = express.Router();
const routinesController = require('../controllers/routines');
const exercisesRouter = require('./exercises');

// Route for creating a new routine
router.get('/new', routinesController.new);
router.post('/', routinesController.create);

// Route for editing a routine
router.get('/:id/edit', routinesController.edit);
router.put('/:id', routinesController.update);

// Route for deleting a routine
router.delete('/:id', routinesController.delete);

// Route for viewing training routines
router.get('/', routinesController.index);

// Include the exercisesRouter
router.use('/:id/exercises', exercisesRouter);

module.exports = router;