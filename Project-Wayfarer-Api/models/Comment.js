const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
	{
		body: {
			type: String,
			required: true,
			min: 5,
			max: 200,
		},
		userId: mongoose.Schema.ObjectId,
		postId: mongoose.Schema.ObjectId,
	},
	{ timestamps: true }
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
