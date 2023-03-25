import express from 'express';

import authRouter from './routers/auth.js';
import blogRouter from './routers/blogs.js';
import categoryRouter from './routers/categories.js';
import * as dotenv from 'dotenv'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import multer from 'multer';

const app = express();

dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cookieParser());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../client/public/upload");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
});
  
const upload = multer({ storage });

app.post('/api/upload', upload.single('file'), function (req, res, next){
    const file = req.file;
    res.status(200).json(file.filename);
})

app.use('/api/auth', authRouter);
app.use('/api/blogs', blogRouter);
app.use('/api/cats', categoryRouter);

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