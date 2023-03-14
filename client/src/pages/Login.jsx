import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [err, setErr] = useState(null);

    const handleChange = e => {
        setUser(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        axios.post('/api/auth/login', user)
            .then(navigate('/'))
            .catch(err => {
                if (err) {
                   setErr(err.response.data);
                }
            });
    }
    return (
        <div className='auth'>
            <h1>Login</h1>
            <form>
                <input type='text' placeholder='email' name='email' onChange={handleChange}/>
                <input type='password' placeholder='password' name='password' onChange={handleChange}/>
                <button onClick={handleSubmit}>Sign In</button>
                {err && <p>err</p>}
                <span>Not registered yet? <Link to='/register'>Register</Link></span>
            </form>
        </div>
    )
}

export default Login;