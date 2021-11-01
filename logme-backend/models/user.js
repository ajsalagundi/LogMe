const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: {
		type: String,
		required: [ ture, 'Username is required' ]
	},
	password: {
		type: String,
		required: [ ture, 'Password is required' ]
	}
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
