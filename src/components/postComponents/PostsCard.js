const PostsCard = (props) => {
	return (
		<>
			<div
				// key={props.post._id}
				className="post-card border-black border-2 p-3  m-4 flex flex-col justify-between"
			>
				{/* <img src={props.cities.image} alt={props.post.name + ' Image'} /> */}
				<h1 className="text-3xl"> {props.post.title}</h1>
				<p className="text-"> {props.post.body}</p>
				<div className="flex justify-between px-5">
					<button
						className="btn btn-danger"
						onClick={() => props.deletePost(props.postsObj._id)}
					>
						Delete
					</button>
					<button
						className="btn bg-gray-700 text-gray-300"
						onClick={() => props.updatePost(props.postsObj._id)}
					>
						Update
					</button>
				</div>
			</div>
		</>
	);
};

export default PostsCard;
