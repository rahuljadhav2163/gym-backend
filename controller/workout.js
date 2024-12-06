import Workout from '../model/workout.js';
import User from '../model/user.js';

export const addworkout = async (req, res) => {
    const { phone, workout } = req.body;

    if (!phone || !workout || !workout.type || !workout.duration || !workout.workout) {
        return res.status(400).json({ message: 'Invalid input data' });
    }

    try {

        const user = await User.findOne({ phone });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const newWorkout = new Workout({
            ...workout,
            user: user._id,
        });

        await newWorkout.save();

        res.status(201).json({
            message: 'Workout added successfully',
            workout: newWorkout,
        });
    } catch (error) {
        console.error('Error adding workout:', error);
        res.status(500).json({ message: 'Server error', error });
    }
}


export const getworkout = async (req, res) => {
    const { phone } = req.params;

    try {
        const user = await User.findOne({ phone });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const workouts = await Workout.find({ user: user._id });

        res.status(200).json({
            message: 'Workouts fetched successfully',
            workouts
        });
    } catch (error) {
        console.error('Error fetching workouts:', error);
        res.status(500).json({ message: 'Server error', error });
    }
}
