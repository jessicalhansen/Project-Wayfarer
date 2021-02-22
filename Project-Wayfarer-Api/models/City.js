const mongoose = require('mongoose');

const citySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		image: String,
		state: String,
		country: String,
	},
	{ timestamps: true }
);

const City = mongoose.model('City', citySchema);

module.exports = City;
