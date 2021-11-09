import P from "prop-types";
import "./styles.css";

export const PostCard = (props) /* ou ({ post }) */ => {
  const { post } = props; // Sem essa linha de código

  return (
    <div className="post">
      <img src={post.cover} alt={post.title} />
      <div className="post-content">
        <h2>
          {post.title} {post.id}
        </h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  post: P.object.isRequired
};
