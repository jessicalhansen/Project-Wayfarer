import { Link } from 'react-router-dom';

const PostsCard = (props) => {
	return (
		<>
			<div className="post-card border-black border-2 p-3  m-4 flex flex-col justify-between">
				<h1 className="text-3xl"> {props.post.title}</h1>
				<p className="text-"> {props.post.body}</p>
				<div className="flex justify-between px-5">
					<button
						className="btn btn-danger"
						// onClick={() => props.deletePost(props.post._id)}
					>
						Delete
					</button>
					<Link to={`/editpost/${props.post._id}`}>
					<button
						className="btn bg-gray-700 text-gray-300"
					>
						Edit Post
					</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default PostsCard;
