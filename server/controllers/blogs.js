import Blog from '../models/blog.js';

export const getBlogs = async (req, res) => {
    const blogs = await Blog.find();
    console.log("getblogs called");
    res.status(200).send(blogs);
}

export const getBlogById = async (req, res) => {
    const blog = await Blog.findOne({_id: req.params._id});
    res.status(200).send(blog);
}

export const addBlog = async (req, res) => {
    res.status(200).send('Added');
}

export const deleteBlog = async (req, res) => {
    res.status(200).send('deleted');
}

export const updateBlog = async (req, res) => {
    res.status(200).send('updated');
}