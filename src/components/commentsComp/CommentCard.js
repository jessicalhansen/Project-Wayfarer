const CommentCard = (props) => {
	return (
		<div className="w-1/2 flex">
			<p className="float-left m-2 p-2" key={props.comment._id}>{props.comment.body}</p>
			<button className="btn btn-danger float-right m-2" onClick={() => props.handleDelete(props.comment._id)}>
				Delete
			</button>
		</div>
	);
};
export default CommentCard;
