import express from 'express';

import userRouter from './routers/users.js';
import authRouter from './routers/auth.js';
import blogRouter from './routers/blogs.js';
import * as dotenv from 'dotenv'
import mongoose from 'mongoose';

const app = express();

dotenv.config()

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/blogs', blogRouter);

mongoose.connect(process.env.CONNECTION_URL)
.then(
    app.listen(process.env.PORT, () => {
    console.log(`listening on port: ${process.env.PORT}`);
}))
.catch(err => {
    if(err){
        console.log(err);
    }
})