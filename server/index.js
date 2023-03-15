import express from 'express';

import authRouter from './routers/auth.js';
import blogRouter from './routers/blogs.js';
import * as dotenv from 'dotenv'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app = express();

dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cookieParser());

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