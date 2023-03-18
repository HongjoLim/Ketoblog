import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
    const [posts,setPosts] = useState([]);

    const cat = useLocation().search

    useEffect(() => {
        console.log(`cat: ${cat}`);
        const getPosts = async () => {
            try {
                const res = await axios.get(`/api/blogs${cat}`);
                setPosts(res.data);

            } catch (err) {
                console.log(err);
            }
        };
        getPosts();
    },[cat]);

    return (
        <div className='home'>
            <div className='posts'>
                {posts.map((p) => (
                    <div className='post' key={p.id}>
                        <div className='img'>
                            <img src={p.img} alt='' />
                        </div>
                        <div className='content'>
                            <Link className='link' to={`blog/${p.id}`}>{p.title}</Link>
                            <p>{p.desc}</p>
                            <button>Read more</button>
                        </div>
                    </div>
                    )
                )}
            </div>
        </div>
    )
}

export default Home;