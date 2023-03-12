import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: String,
    content: String,
    user_id: String,
    comments: [{ user_id: String, date: String, comment: String}],
    date: {type: Date, default: Date.now},
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    },
    img: {
        data: Buffer,
        contentType: String
    },
});

const Blog = mongoose.model('blog', blogSchema);
export default Blog;