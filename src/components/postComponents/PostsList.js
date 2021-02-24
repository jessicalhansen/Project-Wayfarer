import React from 'react';
import PostsCard from './PostsCard';

const PostsList = (props) => {
	const posts = props.posts.map((postsObj) => {
		return (
			<PostsCard
				key={postsObj._id}
				post={postsObj}
				// updatePost={props.updatePost}
				// deletePost={props.deletePost}
			/>
		);
	});

	return <ul>{posts}</ul>;
};

export default PostsList;
