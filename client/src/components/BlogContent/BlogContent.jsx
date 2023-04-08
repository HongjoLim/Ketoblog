import './BlogContent.css';
import sampleImg from '../../images/sample.jpg';

const BlogContent = ({post}) => {
    return (
        <div className="blogContent">
            <div className='blogContentWrapper'>
                <img className='blogContentImg' src={post?.img || sampleImg} alt='' />
                <h1 className='blogContentTitle'>
                    {post?.title}
                    <div className='blogContentIcons'>
                        <i className="blogContentIcon far fa-edit"></i>
                        <i className="blogContentIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className='blogContentInfo'>
                    <span className='blogContentUser'>User: <b>{post?.user_email}</b></span>
                    <span className='blogContentDate'>{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className='blogContentContent'>{post?.desc}</p>
            </div>
        </div>
    );
}

export default BlogContent;