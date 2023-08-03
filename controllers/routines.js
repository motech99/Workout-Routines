const Routine = require('../models/routine');
const Workout = require('../models/workout');

async function index(req, res) {
  try {
    const routines = await Routine.find({});
    res.render('routines/training', { routines });
  } catch (err) {
    console.error(err);
    res.render('error', { errorMsg: err.message });
  }
}

async function newRoutine(req, res) {
  try {
    const workouts = await Workout.find({});
    res.render('routines/new', { workouts });
  } catch (err) {
    console.error(err);
    res.render('error', { errorMsg: err.message });
  }
}

async function createRoutine(req, res) {
  try {
    const routineData = {
      name: req.body.name,
      sets: req.body.sets,
      reps: req.body.reps,
      workouts: req.body.workouts, // Array of Workout IDs
    };

    await Routine.create(routineData);
    res.redirect('/routines');
  } catch (err) {
    console.error(err);
    res.render('routines/new', { errorMsg: err.message });
  }
}

async function editRoutine(req, res) {
  try {
    const routine = await Routine.findById(req.params.id).populate('workouts');
    const workouts = await Workout.find({});
    res.render('routines/edit', { routine, workouts });
  } catch (err) {
    console.error(err);
    res.render('error', { errorMsg: err.message });
  }
}

async function updateRoutine(req, res) {
  try {
    const routine = await Routine.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/routines/training');
  } catch (err) {
    console.error(err);
    res.render('routines/edit', { errorMsg: err.message });
  }
}

async function deleteRoutine(req, res) {
  try {
    const routine = await Routine.findByIdAndDelete(req.params.id);
    if (!routine) {
      throw new Error('Routine not found');
    }
    res.redirect('/routines/training');
  } catch (err) {
    console.error(err);
    res.render('error', { errorMsg: err.message });
  }
}

module.exports = {
  index,
  create: createRoutine,
  new: newRoutine,
  edit: editRoutine,
  update: updateRoutine,
  delete: deleteRoutine,
};
