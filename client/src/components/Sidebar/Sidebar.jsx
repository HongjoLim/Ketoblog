import './Sidebar.css';

import {useState, useEffect} from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';

const Sidebar = () => {

    const [cats, setCats] = useState([]);
    
    useEffect (() => {
        const getCats = async () => {
            const res = await axios.get('/api/cats');
            setCats(res.data);
        }
        getCats();
    }, []);
    
    return (
        <div className="sidebar">
            <div className='sidebarItem'>
                <span className='sidebarTitle'>
                    More posts
                </span>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>
                    Categories
                </span>
                <ul className='sidebarList'>
                    {cats.map(c => (
                        <Link className='link' to='/' key={c._id} state={{ cat: c }}>
                            <li className='sidebarListItem' key={c._id}>{c.name}</li>
                        </Link>
                    ))}               
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
