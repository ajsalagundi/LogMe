const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FitnessSchema = new Schema({
	username: { type: String, required: true },
	exercise: {
		name: { type: String, required: true },
		time: { type: Number, required: true },
		circuits: { type: Number, required: true },
		sets: { type: Number, required: true },
		reps: { type: Number, required: true }
	}
});

const Fitness = mongoose.model('fitness', FitnessSchema);

module.exports = Fitness;