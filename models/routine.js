const mongoose = require('mongoose');

const routineSchema = new mongoose.Schema({
  name: String,
  sets: Number,
  reps: {
    type: String,
    validate: /^\d+(\-\d+)?$/,
  },
  workouts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workout',
  }],
});

module.exports = mongoose.model('Routine', routineSchema);
