import './Post.css';

const Post = ({post}) => {
    return (
        <div className='post'>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Recipes</span>
                </div>
                <span className='postTitle'>Post Title</span>
                <hr />
                <span className='postDate'>1 hour ago</span>
            </div>
        </div>
    );
}

export default Post;