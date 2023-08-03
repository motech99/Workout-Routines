// Importing the Mongoose library for schema creation
const mongoose = require('mongoose');

// Defining the routine schema using Mongoose's Schema class
const routineSchema = new mongoose.Schema({
  // Defining the 'name' field with type String
  name: String,
  // Defining the 'sets' field with type Number
  sets: Number,
  // Defining the 'reps' field with 
  reps: {
    type: String,
    validate: /^\d+(\-\d+)?$/, // regex validation for rep format (number to number) 8-12
  },
  // Defining the 'workouts' field as an array of ObjectIds, 
  workouts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workout', // Reference to the 'Workout' model
  }],
});


module.exports = mongoose.model('Routine', routineSchema);
