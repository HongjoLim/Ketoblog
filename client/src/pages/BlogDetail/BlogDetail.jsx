import './BlogDetail.css';

import { useLocation } from 'react-router-dom';

import BlogContent from '../../components/BlogContent/BlogContent';
import Sidebar from '../../components/Sidebar/Sidebar';

const BlogDetail = () => {
    const location = useLocation();
    const { post } = location.state;
    return (
        <div className="blogDetail">
            <BlogContent key={post._id} post={post}/>
            <Sidebar />
        </div>
    );
}

export default BlogDetail;