const Workout = require('../models/workout');

// Get all workouts
async function index(req, res) {
    try {
      const workouts = await Workout.find({});
      render("index", {workouts})
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: err
      });
    }
  }
  
// Render the form for creating a new workout
function newWorkout(req, res) {
  res.render('workouts/new', { errorMsg: '' });
}

// Create a new workout
async function create(req, res) {
  req.body.cast = req.body.cast.trim();
  if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    await Workout.create(req.body);
    res.redirect('/workouts');
  } catch (err) {
    console.log(err);
    res.render('workouts/new', { errorMsg: err.message });
  } 
}

module.exports = {
  index,
  new: newWorkout,
  create
};
