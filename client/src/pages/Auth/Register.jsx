import './Auth.css';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        img: null,
    });

    const [err, setErr] = useState(null);

    const handleChange = e => {
        setUser(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            await axios.post('/api/auth/register', user);
            navigate('/login');
        } catch (err) {
            setErr(err.response.data);
        }
    }

    return (
        <div className='auth'>
            <h1>Register</h1>
            <form className='authForm'>
                <input className='authInput' type='text' placeholder='first name' name='firstname' onChange={handleChange}/>
                <input className='authInput' type='text' placeholder='last name' name='lastname' onChange={handleChange}/>
                <input className='authInput' type='email' placeholder='email' name='email' onChange={handleChange}/>
                <input className='authInput' type='password' placeholder='password' name='password' onChange={handleChange}/>
                <button className='authButton' onClick={handleSubmit}>Register</button>
                {err && <p>{err}</p>}
                <span>Have an account? <Link to='/login'>Login</Link></span>
            </form>
        </div>
    )
}

export default Register;