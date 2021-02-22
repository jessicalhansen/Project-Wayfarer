const db = require('../models');

const index = (req, res) => {
	// Query DB for all Posts
	db.Post.find({}, (err, allPosts) => {
		if (err) return console.log(err);
		// Send back data as JSON object
		res.json(allPosts);
	});
};

const show = (req, res) => {
	// Get Post from DB by ID
	db.Post.findById(req.params.id, (err, foundPost) => {
		if (err) return console.log(err);
		// Send back data to client as JSON object
		res.json(foundPost);
	});
};

const create = (req, res) => {
	// Query DB to create a new Post
	db.Post.create(req.body, (err, newPost) => {
		if (err) return console.log(err);
		res.json(newPost);
	});
};

const update = (req, res) => {
	db.Post.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedPost) => {
			if (err) return console.log(err);
			res.json(updatedPost);
		}
	);
};

const destroy = (req, res) => {
	db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
		if (err) return console.log(err);
		res.json(deletedPost);
	});
};

module.exports = {
	index,
	show,
	create,
	update,
	destroy,
};
