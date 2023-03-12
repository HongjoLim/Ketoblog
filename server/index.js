import express from 'express';

import userRouter from './routers/users.js';
import authRouter from './routers/auth.js';
import blogRouter from './routers/blogs.js';

import mongoose from 'mongoose';

const PORT = 5000;
const app = express();

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/blogs', blogRouter);

const CONNECTION_URL = '';

mongoose.connect(CONNECTION_URL)
.then(
    app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
}))
.catch(err => {
    if(err){
        console.log(err);
    }
})