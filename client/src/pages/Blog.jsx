import { useState, useEffect, useContext } from 'react';
import Delete from '../images/delete.png';
import Edit from '../images/edit.png';
import { Link, useLocation } from 'react-router-dom';
import Menu from '../components/Menu';
import axios from 'axios';
import moment from 'moment';
import { AuthContext } from '../context/authContext';

const Blog = () => {

    const [blog, setBlog] = useState({});
    const [postedUser, setPostedUser] = useState({});

    const location = useLocation();

    const blogId = location.pathname.split('/')[2];
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const getBlog = async () => {
            try {
                const res = axios.getBlog(`/api/blogs/${blogId}`);
                setBlog(res.data);
            } catch (err) {
                console.log(err);
            }
        }

        getBlog();

        const getUser = async () => {
            try {
                const res = axios.get('/api/auth', blog?.user_email);
                console.log(res.data);
                setPostedUser(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getUser();
    }, [blogId])

    return (
        <div className='blog'>
            <div className='content'>
                <img src={blog.img_url} alt='' />
                <div className='user'>
                    {postedUser.img && <img src={postedUser.img} alt='' />}
                    <div className='info'>
                        <span>{postedUser?.name}</span>
                        <p>Posted {moment(blog.date).fromNow()}</p>
                        {currentUser.user_email == blog.user_email && (
                        <div className='edit'>
                            <Link to={`/write?edit=${blog.id}`}>
                                <img src={Edit} />
                            </Link>
                            <Link to={`/delete/${blog.id}`}>
                                <img src={Delete} />
                            </Link>
                        </div>
                        )}
                    </div>
                </div>
                <h1>{blog.title}</h1>
                <p>{blog.content}</p>
            </div>
            <Menu />
        </div>
    )
}

export default Blog;