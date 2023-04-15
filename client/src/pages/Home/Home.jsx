import './Home.css';

import Header from "../../components/Header/Header";
import Posts from '../../pages/Posts/Posts'
import Sidebar from '../../components/Sidebar/Sidebar'

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const writer_email = useLocation().state?.user_email;
  const cat = useLocation().state?.cat._id;

  useEffect(() => {
      const fetchPosts = async () => {
          let api_url = `/api/blogs`;
          if (writer_email) {
            api_url += `/?user_email=${writer_email}`;
          }

          if (cat) {
            api_url += `/?cat=${cat}`;
          }

          const res = await axios.get(api_url);
          setPosts(res.data);
      }
      fetchPosts();
  }, [cat, writer_email])

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