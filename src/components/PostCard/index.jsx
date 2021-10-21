import './styles.css'

export const PostCard = (props) => {
    const { post } = props;

    return (
        <div className="post">
            <img src={post.cover} alt={post.title} />
            <div className="post-content">
                <h2>{post.title} {post.id}</h2>
                <p>{post.body}</p>
            </div>
        </div>
    )
};