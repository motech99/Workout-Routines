// const mongoose = require('mongoose');

// const workoutSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     trim: true,
//   },
//   muscle: {
//     type: String,
//     enum: [
//       'abdominals',
//       'abductors',
//       'adductors',
//       'biceps',
//       'calves',
//       'chest',
//       'forearms',
//       'glutes',
//       'hamstrings',
//       'lats',
//       'lower_back',
//       'middle_back',
//       'neck',
//       'quadriceps',
//       'traps',
//       'triceps',
//     ],
//   },
//   difficulty: {
//     type: String,
//     enum: ['beginner', 'intermediate', 'expert'],
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = mongoose.model('Workout', workoutSchema);

const workouts = [1,2,3];
module.exports = workouts;