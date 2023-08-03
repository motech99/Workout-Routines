const Routine = require('../models/routine');
const Workout = require('../models/workout');

async function index(req, res) {
  try {
    const routines = await Routine.find({}).populate('workouts');
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
    console.log(req.body);
    await Routine.create(req.body);
    res.redirect('/routines');
  } catch (err) {
    console.error(err);
    res.render('routines/new', { errorMsg: err.message });
  }
}

async function editRoutine(req, res) {
    const routineId = req.params.id;
    try {
      const routine = await Routine.findById(routineId);
      const workouts = await Workout.find({});
      res.render('routines/edit', { routine, workouts });
    } catch (err) {
      console.error(err);
      res.render('error', { errorMsg: err.message });
    }
  }
  
  async function updateRoutine(req, res) {
    const routineId = req.params.id;
    try {
      await Routine.findByIdAndUpdate(routineId, req.body);
      res.redirect('/routines');
    } catch (err) {
      console.error(err);
      const routine = await Routine.findById(routineId);
      const workouts = await Workout.find({});
      res.render('routines/edit', { routine, workouts, errorMsg: err.message });
    }
  }
  
  async function deleteRoutine(req, res) {
    const routineId = req.params.id;
    console.log("Deleting routine with ID:", routineId); // Add this line
    try {
      await Routine.findByIdAndRemove(routineId);
      res.redirect('/routines');
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
  delete: deleteRoutine
 
};
