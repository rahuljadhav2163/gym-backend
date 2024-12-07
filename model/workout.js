import mongoose from 'mongoose';

const WorkoutSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  workout: {
    type: String,
    required: true,
  },
  duration: {
    type: String, 
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true
});

export const Workout = mongoose.model('Workout', WorkoutSchema);
export default Workout;
