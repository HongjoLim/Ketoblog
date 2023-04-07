import './BlogDetail.css';

import BlogContent from '../../components/BlogContent/BlogContent';
import Sidebar from '../../components/Sidebar/Sidebar';

const BlogDetail = () => {
    return (
        <div className="blogDetail">
            <BlogContent />
            <Sidebar />
        </div>
    );
}

export default BlogDetail;