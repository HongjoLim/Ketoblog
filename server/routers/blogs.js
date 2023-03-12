import express from 'express';

const blogRouter = express.Router();

blogRouter.get('/', (req, res) => {
    res.send("Blogs get page");
});

export default blogRouter;