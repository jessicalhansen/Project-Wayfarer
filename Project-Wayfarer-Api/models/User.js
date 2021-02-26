const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			trim: true,
			min: 1,
			max: 200,
		},
		password: {
			type: String,
			required: true,
			trim: true,
			min: 1,
			max: 200,
		},
	},
	{ timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
