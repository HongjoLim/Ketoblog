import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    await User.findOne({ user_email: req.body.user_email })
    .then(user => {
        if (!user) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);
    
            new User({
                name: req.body.name,
                surname: req.body.surname,
                user_email: req.body.user_email,
                password: hash,
                joined: new Date()
            }).save();
    
            res.status(200).json('Successfully registered');
        } else {
            res.status(409).json('User email exists. Please log in');
        }
    });
};

export const login = async (req, res) => {
    await User.findOne({ user_email: req.body.user_email })
        .then(user => {
            console.log(user);
            if (!user) {
                res.status(404).json('You have not registered yet.');
            } else {
                if (!bcrypt.compareSync(req.body.password, user.password)) {
                    res.status(401).send('Password does not match.');
                    // Authentication successful
                } else {
                    const token = jwt.sign({ id: user.id }, "jwtkey");
                    res.cookie('access_token', token,
                        {
                            httpOnly: true
                        }).status(200).json(user);
                }
            }
        });
};

export const logout = (req, res) => {
    res.clearCookie('access_token', {
        sameSite: 'none',
        secure: true
    }).status(200).json('You successfully signed out.');
};