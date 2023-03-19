import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String,
    surname: String,
    user_email: String,
    password: String,
    img_url: String,
    joined: {type: Date, default: Date.now},
});
const User = mongoose.model('user', userSchema);
export default User;