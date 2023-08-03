const Workout = require('../models/workout');

async function index(req, res) {
  try {
    const workouts = await Workout.find({});
    res.render("workouts/exercise", { workouts, req });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err
    });
  }
}
  
function newWorkout(req, res) {
  res.render('workouts/new');
}

// Create a new workout
async function create(req, res) {
  try {
    const workoutData = {
      name: req.body.name,
      muscle: req.body.muscle,
      difficulty: req.body.difficulty,
      date: new Date(req.body.date),
      createdBy: req.user._id, // Add the user ID to the workout data
    };

    await Workout.create(workoutData);
    res.redirect('/workouts/exercise');
  } catch (err) {
    console.error(err);
    res.render('workouts/new', { errorMsg: err.message });
  }
}

async function deleteWorkout(req, res) {
  const workoutId = req.params.id;
  try {
    // Find the workout by its ID and createdBy field
    const workout = await Workout.findOne({ _id: workoutId, createdBy: req.user._id });
    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }

    // Remove the workout
    await workout.deleteOne();
    res.redirect('/workouts/exercise');
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err
    });
  }
}

async function editForm(req, res) {
  const workoutId = req.params.id;
  try {
    // Find the workout by its ID and createdBy field
    const workout = await Workout.findOne({ _id: workoutId, createdBy: req.user._id });
    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }

    res.render('workouts/edit', { workout });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err
    });
  }
}

async function update(req, res) {
  const workoutId = req.params.id;
  try {
    // Find the workout by its ID and createdBy field
    const workout = await Workout.findOne({ _id: workoutId, createdBy: req.user._id });
    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }

    // Update the workout
    workout.name = req.body.name;
    workout.muscle = req.body.muscle;
    workout.difficulty = req.body.difficulty;
    workout.date = new Date(req.body.date);
    await workout.save();

    res.redirect('/workouts/exercise');
  } catch (err) {
    console.error(err);
    res.render('workouts/edit', { workoutId, errorMsg: err.message });
  }
}

module.exports = {
  index,
  new: newWorkout,
  create,
  delete: deleteWorkout,
  editForm,
  update
}