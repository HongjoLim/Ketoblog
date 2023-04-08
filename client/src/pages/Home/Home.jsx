import './Home.css';

import Header from "../../components/Header/Header";
import Posts from '../../pages/Posts/Posts'
import Sidebar from '../../components/Sidebar/Sidebar'

import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      const fetchPosts = async () => {
          const res = await axios.get('/api/blogs');
          setPosts(res.data);
      }
      fetchPosts();
  }, [])

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  );
}

export default Home;