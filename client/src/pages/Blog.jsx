import React from 'react';
import Hongjo from '../images/hongjo.jpeg';
import Sample from '../images/sample.jpg';
import Delete from '../images/delete.png';
import Edit from '../images/edit.png';
import {Link} from 'react-router-dom';
import Menu from '../components/Menu';

const Blog = () => {
    const post = { id:'1', title:'Title', content:'Content', userImg: Hongjo, username: "Hongjo", img: Sample };
    return (
        <div className='blog'>
            <div className='content'>
                <img src={post?.img} alt='' />
                <div className='user'>
                    {post?.userImg && <img src={post?.userImg} alt='' />}
                    <div className='info'>
                        <span>{post?.username}</span>
                        <p>Posted 2 days ago</p>
                        <div className='edit'>
                            <Link to={`/write?edit=${post?.id}`}>
                                <img src={Edit}/>
                            </Link>
                            <Link to={`/delete/${post?.id}`}>
                                <img src={Delete}/>  
                            </Link>
                        </div>
                    </div>
                </div>
                <h1>{post?.title}</h1>
                <p>{post?.content}</p>
            </div>
            <Menu/>
        </div>
    )
}

export default Blog;