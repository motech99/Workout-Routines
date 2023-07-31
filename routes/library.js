const express = require('express');
const router = express.Router();
const libraryController = require('../controllers/library');

// GET /workouts
router.get('/', libraryController.index);


module.exports = router;