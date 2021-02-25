import React from 'react';
import { Link } from 'react-router-dom';

const PostsCard = (props) => {
	return (
		<>
			<div className="post-card bg-gray-300 border-black border-2 p-2 m-1.5 flex flex-col">
				<Link to={`/showpost/${props.post._id}`}>
					<h1 className="text-xl"> {props.post.title}</h1>
					<p className="text-sm"> {props.post.body}</p>
				</Link>
				<div className="flex justify-between px-5">
					<button
						className="btn btn-danger hover:bg-blue-500"
						onClick={() => props.deletePost(props.post._id)}
					>
						Delete
					</button>
					<p>{props.post.createdAt}</p>
					<Link to={`/editpost/${props.post._id}`}>
						<button className="btn bg-gray-700 text-gray-300 hover:bg-blue-500">
							Edit Post
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default PostsCard;
