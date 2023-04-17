import './BlogContent.css';
import sampleImg from '../../images/sample.jpg';
import {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';

import axios from 'axios';

const BlogContent = ({post}) => {

    const [postedUser, setPostedUser] = useState({});

    useEffect (() => {
        if (post.user_email) {
            const getPostedUser = async () => {
                const res = await axios.get(`/api/auth/${post.user_email}`);
                setPostedUser(res.data);
            }

            getPostedUser();
        }
    }, []);
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
                    <span className='blogContentUser'>Author: <Link className='link' to={`/`} state={{user_email: post.user_email}}><b>{`${postedUser?.firstname} ${postedUser?.lastname}`}</b></Link></span>
                    <span className='blogContentDate'>Posted: {new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className='blogContentContent'>{post?.desc}</p>
            </div>
        </div>
    );
}

export default BlogContent;