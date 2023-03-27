import { useState, useEffect, useContext } from 'react';
import Delete from '../images/delete.png';
import Edit from '../images/edit.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Menu from '../components/Menu';
import axios from 'axios';
import moment from 'moment';

import DOMPurify from 'dompurify';
import { AuthContext } from '../context/authContext';

const Blog = () => {

    const [blog, setBlog] = useState({});

    const location = useLocation();
    const navigate = useNavigate();

    const blogId = location.pathname.split('/')[2];
    const { currentUser } = useContext(AuthContext);

    const [postedUser, setPostedUser] = useState({});

    useEffect(() => {
        const getBlog = async () => {
            try {
                const res = await axios.get(`/api/blogs/${blogId}`);
                return res.data;
            } catch (err) {
                console.log(err);
            }
        }

        const getPostedUser = async (user_email) => {
            try{
                const res = await axios.get(`/api/auth/${user_email}`);
                return res.data;
            } catch (err) {
                console.log(err);
            }
        }

        const fetchAllData = async () => {
            const match_blog = await getBlog();
            const match_user = await getPostedUser(match_blog.user_email);
            setBlog(match_blog);
            setPostedUser(match_user);
        }

        fetchAllData();
    }, [blogId]);

    const handleDelete = async e => {
        e.preventDefault();
        try {
            await axios.delete(`/api/blogs/${blogId}`);
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }

    const getContentText = html => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent;
    }

    return (
        <div className='blog'>
            <div className='content'>
                <img src={blog?.img_url} alt='' />
                <div className='user'>
                    {postedUser?.img && <img src={postedUser?.img} alt='' />}
                    <div className='info'>
                        <span>{postedUser?.name}</span>
                        <p>Posted {moment(blog?.date).fromNow()}</p>
                        {currentUser?.user_email === blog?.user_email && (
                        <div className='edit'>
                            <Link to={`/write?edit=${blog._id}`} state={blog}>
                                <img src={Edit} alt=''/>
                            </Link>
                            <Link to={`/api/${blog._id}`}>
                                <img src={Delete} alt='' onClick={handleDelete}/>
                            </Link>
                        </div>
                        )}
                    </div>
                </div>
                <h1>{blog.title}</h1>
                <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(blog.content),}}></p>
                </div>
            <Menu />
        </div>
    )
}

export default Blog;