const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
			minLength: 1,
			maxLength: 200,
		},
		body: {
			type: String,
			required: true,
		},
		userId: mongoose.Schema.ObjectId,
		cityId: mongoose.Schema.ObjectId,
	},
	{ timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
