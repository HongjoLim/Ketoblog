import express from 'express';
import {getBlogs,
        getBlog,
        addBlog, 
        deleteBlog, 
        updateBlog} 
from '../controllers/blogs.js';

const blogRouter = express.Router();

blogRouter.get('/', getBlogs);
blogRouter.get('/:_id', getBlog);
blogRouter.post('/', addBlog);
blogRouter.delete('/:_id', deleteBlog);
blogRouter.put('/:_id', updateBlog);

export default blogRouter;