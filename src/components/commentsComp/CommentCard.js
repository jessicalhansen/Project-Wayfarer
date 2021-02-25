const CommentCard = (props) => {
	return (
		<div
			id="comment-card"
			className="flex justify-between  border-gray-100 border-3 p-3 bg-gray-400 text-black rounded-md m-2"
		>
			<div>
				<p className="text-2xl">{props.comment.body}</p>
			</div>
			<div>
				<button
					className="btn btn-danger"
					onClick={() => props.handleDelete(props.comment._id)}
				>
					Delete
				</button>
			</div>
		</div>
	);
};
export default CommentCard;
