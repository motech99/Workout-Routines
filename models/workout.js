const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  muscle: {
    type: String,
    enum: [
      'abdominals',
      'abductors',
      'adductors',
      'biceps',
      'calves',
      'chest',
      'shoulders',
      'forearms',
      'glutes',
      'hamstrings',
      'legs',
      'lats',
      'lower_back',
      'middle_back',
      'neck',
      'quadriceps',
      'traps',
      'triceps',
    ],
  },
  difficulty: {
    type: String,
    enum: ['beginner', 'intermediate', 'expert'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Workout', workoutSchema);