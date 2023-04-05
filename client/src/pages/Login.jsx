import { useState, useContext } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Login = () => {

    const [user, setUser] = useState({
        user_email: '',
        password: ''
    });

    const [err, setErr] = useState(null);

    const handleChange = e => {
        setUser(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    const navigate = useNavigate();

    const {login} = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(user);
            navigate('/');
        } catch (err) {
            setErr(err.response.data);
        }
    }
    return (
        <div className='auth'>
            <h1>Login</h1>
            <form>
                <input type='text' placeholder='email' name='user_email' onChange={handleChange}/>
                <input type='password' placeholder='password' name='password' onChange={handleChange}/>
                <button onClick={handleSubmit}>Sign In</button>
                {err && <p>{err}</p>}
                <span>Not registered yet? <Link to='/register'>Register</Link></span>
            </form>
        </div>
    )
}

export default Login;