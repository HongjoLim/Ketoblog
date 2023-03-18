import express from 'express';
import {getBlogs,
        getBlogById,
        addBlog, 
        deleteBlog, 
        updateBlog} 
from '../controllers/blogs.js';

const blogRouter = express.Router();

blogRouter.get('/', getBlogs);
blogRouter.get('/:id', getBlogById);
blogRouter.post('/', addBlog);
blogRouter.delete('/:id', deleteBlog);
blogRouter.put('/:id', updateBlog);

export default blogRouter;