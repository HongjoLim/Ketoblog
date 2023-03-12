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

const CONNECTION_URL = 'mongodb+srv://hongjolim:%40Ghdwh0326@cluster0.axfkv1w.mongodb.net/ketogram?retryWrites=true&w=majority';

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