// Importing the Mongoose library for schema creation
const mongoose = require('mongoose');

// Defining the workout schema using Mongoose's Schema class
const workoutSchema = new mongoose.Schema({
  // Defining the 'name' field with type String and trimming whitespace
  name: {
    type: String,
    trim: true,
  },
  // Defining the 'muscle' field with type String 
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
  // Defining the 'difficulty' field with type String 
  difficulty: {
    type: String,
    enum: ['beginner', 'intermediate', 'expert'],
  },
  // Defining the 'date' field with type Date and defaulting to the current date and time
  date: {
    type: Date,
    default: Date.now,
  },
  // Defining the 'createdBy' field with type ObjectId, referencing the 'User' model, and marking it as required
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the 'User' model
    required: true,
  },
});


module.exports = mongoose.model('Workout', workoutSchema);
