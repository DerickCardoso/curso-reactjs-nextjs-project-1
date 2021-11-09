import P from "prop-types";
// Style
import "./styles.css";

// Components
import { PostCard } from "../PostCard";

export const Posts = ({ posts }) => {
    return (
        <div className="posts">
            {posts.map((post) => (
                <PostCard post={post} key={post.id} />
            ))}
        </div>
    );
};

Posts.defaultProps = {
    posts: []
};

Posts.propTypes = {
    posts: P.array
};
