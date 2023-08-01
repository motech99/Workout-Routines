const express = require('express');
const router = express.Router();
const mainPageController = require('../controllers/main-page');

// GET /workouts
router.get('/', mainPageController.index);

module.exports = router;