import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = (req, res) => {
    const match = User.find({email: req.body.email});

    if(match){

        res.status(409).json('User email exists. Please log in');
    } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        new User({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: hash,
            joined: new Date()
        }).save();

        res.status(200).json('Successfully registered');
    }
};

export const login = (req, res) => {
    User.findOne({email: req.body.email})
        .then(user => {
            if (!user) {
                res.status(404).json('You have not registered yet.');
            } else {
                if (!bcrypt.compareSync(req.body.password, user.password)) {
                    res.status(401).send('Password does not match.');
                // Authentication successful
                } else {
                    const token = jwt.sign({id: user.id}, "jwtkey");
                    const { password, ...rest } = user;
                    console.log(user);
                    res.cookie('access_token', token, 
                    {
                        httpOnly: true
                    }).status(200).json(rest);
                }
            }
        });
};

export const logout = (req, res) => {

};