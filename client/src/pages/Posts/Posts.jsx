import './Posts.css';
import Post from '../../components/Post/Post'

const Posts = ({posts}) => {
    return (
        <div className='posts'>
            {posts.map(p => (
                <Post key={p._id} post={p}/>
            ))}
        </div>
    );
}

export default Posts;