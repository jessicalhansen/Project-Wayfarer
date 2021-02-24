import React from 'react';
import PostsCard from './PostsCard';

const PostsList = (props) => {
	const posts = props.posts.map((postsObj) => {
		return <PostsCard key={postsObj._id} post={postsObj} />;
	});

	return <ul>{posts}</ul>;
};

export default PostsList;
