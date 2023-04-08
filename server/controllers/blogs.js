import Blog from '../models/blog.js';
import jwt from "jsonwebtoken";

export const getBlogs = async (req, res) => {
    const user_email = req.query.email;
    const cat = req.query.cat;
    try {

        let blogs;

        if (user_email) {
            blogs = await Blog.find({ user_email });
        } else if (cat) {
            blogs = await Blog.find({
                categories: {
                    $in: [cat],
                }
            });
        } else {
            blogs = await Blog.find();
        }

        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getBlog = async (req, res) => {

    try {
        const blog = await Blog.findById(req.params._id);
        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const addBlog = async (req, res) => {
    const token = req.cookies.access_token;

    if (!token) {
        console.log('token not exists');
        res.status(401).json("Not authenticated!");
    }

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) {
            res.status(403).json("Invalid access token");
        }
    });

    try {
        const blog = new Blog({
            title: req.body.title,
            desc: req.body.desc,
            img: req.body.img_url,
            cats: req.body.cats,
            user_email: req.body.user_email
        });
        await blog.save();
        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const deleteBlog = (req, res) => {

    const token = req.cookies.access_token;
    if (!token) {
        return res.status(401).json('Not authenticated!');
    } else
        jwt.verify(token, 'jwtkey', async (err, userInfo) => {
            if (err) {
                res.status(403).json('Invalid access token');
            } else {
                try {
                    await Blog.findByIdAndDelete(req.params._id);
                    res.status(200).json('Blog post has been deleted');
                } catch (err) {
                    res.status(500).json(err);
                }
            }
        });
}

export const updateBlog = async (req, res) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.status(401).json('Authentication failed!');
    } else jwt.verify(token, 'jwtkey', async (err, userInfo) => {
        if (err) {
            res.status(403).json('Invalid access token');
        } else {
            try {
                const post = await Blog.findOneAndUpdate({ _id: req.params._id },
                    { $set: req.body }, { new: true });
                res.status(200).json(post);
            } catch (err) {
                res.status(500).json(err);
            }
        }
    });
}