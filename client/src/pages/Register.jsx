import {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Register = () => {

    const [user, setUser] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        img: null,
        joined: Date.now
    });

    const handleChange = e => {
        setUser(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleSubmit = async e => {
        e.preventDefault();

        axios.post('/api/auth/register', user)
            .then(res => console.log(res))
            .catch(err => {
                if(err){
                    console.log(err);
                }
            });
    }

    return (
        <div className='auth'>
            <h1>Register</h1>
            <form>
                <input type='text' placeholder='first name' name='name' onChange={handleChange}/>
                <input type='text' placeholder='last name' name='surname' onChange={handleChange}/>
                <input type='email' placeholder='email' name='email' onChange={handleChange}/>
                <input type='password' placeholder='password' name='password' onChange={handleChange}/>
                <button onClick={handleSubmit}>Register</button>
                <p>Problem registering</p>
                <span>Have an account? <Link to='/login'>Login</Link></span>
            </form>
        </div>
    )
}

export default Register;