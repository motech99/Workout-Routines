// Importing the required models
const Routine = require('../models/routine');
const Workout = require('../models/workout');

// Controller function to handle displaying a list of routines
async function index(req, res) {
  try {
    // Finding all routines and populating their associated workouts
    const routines = await Routine.find({}).populate('workouts');
    // Rendering the 'training' view and passing the routines data
    res.render('routines/training', { routines });
  } catch (err) {
    console.error(err);
    // Rendering the 'error' view and passing the error message
    res.render('error', { errorMsg: err.message });
  }
}

// Controller function to display a form for creating a new routine
async function newRoutine(req, res) {
  try {
    // Finding all available workouts to populate the form
    const workouts = await Workout.find({});
    // Rendering the 'new' view and passing the workouts data
    res.render('routines/new', { workouts });
  } catch (err) {
    console.error(err);
    // Rendering the 'error' view and passing the error message
    res.render('error', { errorMsg: err.message });
  }
}

// Controller function to handle creating a new routine
async function createRoutine(req, res) {
  try {
    console.log(req.body); // Logging the request body for debugging
    // Creating a new routine with the data from the request body
    await Routine.create(req.body);
    // Redirecting to the list of routines
    res.redirect('/routines');
  } catch (err) {
    console.error(err);
    // Rendering the 'new' view with an error message
    res.render('routines/new', { errorMsg: err.message });
  }
}

// Controller function to display a form for editing an existing routine
async function editRoutine(req, res) {
  const routineId = req.params.id;
  try {
    // Finding the routine to be edited and available workouts
    const routine = await Routine.findById(routineId);
    const workouts = await Workout.find({});
    // Rendering the 'edit' view and passing the routine and workouts data
    res.render('routines/edit', { routine, workouts });
  } catch (err) {
    console.error(err);
    // Rendering the 'error' view and passing the error message
    res.render('error', { errorMsg: err.message });
  }
}

// Controller function to handle updating an existing routine
async function updateRoutine(req, res) {
  const routineId = req.params.id;
  try {
    // Updating the routine with the data from the request body
    await Routine.findByIdAndUpdate(routineId, req.body);
    // Redirecting to the list of routines
    res.redirect('/routines');
  } catch (err) {
    console.error(err);
    // Finding the routine again and available workouts
    const routine = await Routine.findById(routineId);
    const workouts = await Workout.find({});
    // Rendering the 'edit' view with an error message
    res.render('routines/edit', { routine, workouts, errorMsg: err.message });
  }
}

// Controller function to handle deleting a routine
async function deleteRoutine(req, res) {
  const routineId = req.params.id;
  console.log("Deleting routine with ID:", routineId); // Adding this line for debugging
  try {
    // Finding and removing the routine with the specified ID
    await Routine.findByIdAndRemove(routineId);
    // Redirecting to the list of routines
    res.redirect('/routines');
  } catch (err) {
    console.error(err);
    // Rendering the 'error' view and passing the error message
    res.render('error', { errorMsg: err.message });
  }
}

// Exporting the controller functions for use in routes
module.exports = {
  index,
  create: createRoutine,
  new: newRoutine,
  edit: editRoutine,
  update: updateRoutine,
  delete: deleteRoutine
};
