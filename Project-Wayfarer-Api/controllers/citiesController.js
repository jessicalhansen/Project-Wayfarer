const db = require('../models');

const index = (req, res) => {
	// Query DB for all Cities
	db.City.find({}, (err, allCities) => {
		if (err) return console.log(err);
		// Send back data as JSON object
		return res.json(allCities);
	});
};

const show = (req, res) => {
	// Get City from DB by ID
	db.City.findOne({ _id: req.params.id }, (err, foundCity) => {
		if (err) return console.log(err);
		// Send back data to client as JSON object
		return res.json(foundCity);
	});
};

const create = (req, res) => {
	// Query DB to create a new City
	db.City.create(req.body, (err, newCity) => {
		if (err) return console.log(err);
		return res.json(newCity);
	});
};

const update = (req, res) => {
	db.City.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedCity) => {
			if (err) return console.log(err);
			return res.json(updatedCity);
		}
	);
};

const destroy = (req, res) => {
	db.City.findByIdAndDelete(req.params.id, (err, deletedCity) => {
		if (err) return console.log(err);
		return res.json(deletedCity);
	});
};

module.exports = {
	index,
	show,
	create,
	update,
	destroy,
};
