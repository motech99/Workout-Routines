const express = require('express');
const router = express.Router();
const workoutsController = require('../controllers/workouts');

// GET /workouts
router.get('/', workoutsController.index);


module.exports = router;