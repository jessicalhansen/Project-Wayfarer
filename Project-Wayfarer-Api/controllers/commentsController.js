const db = require('../models');

const index = (req, res) => {
	// Query DB for all Posts
	db.Comment.find({ postId: req.params.postId }, (err, allComments) => {
		if (err) return console.log(err);
		// Send back data as JSON object
		return res.json(allComments);
	});
};

const show = (req, res) => {
	// Get Post from DB by ID
	db.Comment.findById(req.params.id, (err, foundComment) => {
		if (err) return console.log(err);
		// Send back data to client as JSON object
		return res.json(foundComment);
	});
};

const create = (req, res) => {
	console.log(req.body);
	const comment = {
		body: req.body.body,
		userId: req.body.userId,
		postId: req.body.postId,
	};
	// Query DB to create a new Post
	db.Comment.create(comment, (err, newComment) => {
		if (err) return console.log(err);
		return res.json(newComment);
	});
};

const update = (req, res) => {
	db.Comment.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedComment) => {
			if (err) return console.log(err);
			return res.json(updatedComment);
		}
	);
};

const destroy = (req, res) => {
	db.Comment.findByIdAndDelete(req.params.id, (err, deletedComment) => {
		if (err) return console.log(err);
		return res.json(deletedComment);
	});
};

module.exports = {
	index,
	show,
	create,
	update,
	destroy,
};
