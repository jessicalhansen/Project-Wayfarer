const PostsCard = (props) => {
    return (
        <>
            <div
                key={props.posts._id}
                className="border-black border-2 p-3 rounded m-4 flex justify-between"
            >
                <img src={props.cities.image} alt={props.posts.name + ' Image'} />
                <p className="text-"> {props.posts.name}</p>
            </div>
        <button onClick={() => props.deletePost
        (props.postsObj._id)}>Delete</button>
        <button onClick={() => props.updatePost
        (props.postsObj._id)}>Update</button>
        </>
    );
};

export default PostsCard;
