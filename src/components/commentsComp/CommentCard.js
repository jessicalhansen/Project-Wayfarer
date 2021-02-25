const CommentCard = (props) => {
	return (
		<div>
			<p key={props.comment._id}>{props.comment.body}</p>
			<button onClick={() => props.handleDelete(props.comment._id)}>
				Delete
			</button>
		</div>
	);
};
export default CommentCard;
