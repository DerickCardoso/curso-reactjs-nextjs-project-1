// Style
import './styles.css'

// Components
import { PostCard } from '../PostCard';

export const Posts = (props) => {
    const { posts } = props;
    
    return (
        <div className="posts">
            {posts.map(post => (
                <PostCard post={post} key={post.id} />
            ))}
        </div>
    );
};