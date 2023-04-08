import './Post.css';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    return (
        <div className='post'>
            {post.img && (
                <img className='postImg'
                    src={post.img}
                    alt = ''/>
            )}
            <div className="postInfo">
                <div className="postCats">
                    {post.cats.map(c => (
                        <span className="postCat" key={c}>{c}</span>
                    ))}
                </div>
                <Link className='link' to={`/blog/${post._id}`} state={{post}}>
                    <span className='postTitle'>{post.title}</span>
                </Link>
                <p className='postDesc'>{post.desc}</p>
                <hr />
                <span className='postDate'>{ new Date(post.createdAt).toDateString() }</span>
            </div>
        </div>
    );
}

export default Post;