const db = require('../models');

const index = (req, res) => {
	// Query DB for all Posts
	db.Post.find({ cityId: req.params.cityId }, (err, allPosts) => {
		if (err) return console.log(err);
		// Send back data as JSON object
		return res.json(allPosts);
	});
};

const show = (req, res) => {
	// Get Post from DB by ID
	db.Post.findById(req.params.id, (err, foundPost) => {
		if (err) return console.log(err);
		// Send back data to client as JSON object
		return res.json(foundPost);
	});
};

const create = (req, res) => {
	console.log(req.body);
	const post = {
		title: req.body.title,
		body: req.body.body,
		userId: req.body.userId,
		cityId: req.body.cityId,
	};
	// Query DB to create a new Post
	db.Post.create(post, (err, newPost) => {
		if (err) return console.log(err);
		return res.json(newPost);
	});
};

const update = (req, res) => {
	db.Post.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedPost) => {
			if (err) return console.log(err);
			return res.json(updatedPost);
		}
	);
};

const destroy = (req, res) => {
	db.Post.findByIdAndDelete(req.params.id, (err, deletedPost) => {
		if (err) return console.log(err);
		return res.json(deletedPost);
	});
};

module.exports = {
	index,
	show,
	create,
	update,
	destroy,
};
