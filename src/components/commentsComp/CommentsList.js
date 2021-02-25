import CommentCard from './CommentCard';

const CommentsList = (props) => {
	const filteredList = [];

	// if (!props.comments.length) {
	// 	return <div>No Comments ..</div>;
	// } else {
	props.comments.map((comment) => {
		return filteredList.unshift(
			<div className="comment-card">
				<CommentCard comment={comment} handleDelete={props.handleDelete} />
			</div>
		);
	});
	return filteredList;
};
// };

export default CommentsList;
