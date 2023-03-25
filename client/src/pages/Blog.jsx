import { useState, useEffect, useContext } from 'react';
import Delete from '../images/delete.png';
import Edit from '../images/edit.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Menu from '../components/Menu';
import axios from 'axios';
import moment from 'moment';
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
                setBlog(res.data);
            } catch (err) {
                console.log(err);
            }
        }

        getBlog();
    }, [blogId])


    const handleDelete = async e => {
        e.preventDefault();

        await axios.delete(`/api/blogs/${blogId}`);
        navigate('/');
    }

    const handleEdit = async e => {
        e.preventDefault();
        await axios.put(`/api/blogs/${blogId}`);
        navigate('/');
    }

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
                            <Link to={`/write?edit=${blog._id}`} state={blog}>
                                <img src={Edit} alt='' onClick={handleEdit}/>
                            </Link>
                            <Link to={`/delete/${blog._id}`}>
                                <img src={Delete} alt='' onClick={handleDelete}/>
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