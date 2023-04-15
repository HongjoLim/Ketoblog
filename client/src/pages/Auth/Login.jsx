import './Auth.css';

import { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../../context/Context';
import { LOGIN_STATES } from '../../context/Actions';

const Login = () => {

    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching, error } = useContext(Context);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: LOGIN_STATES.START });
        try {
            const user = { email: userRef.current.value, password: passwordRef.current.value }
            const res = await axios.post('/api/auth/login', user);
            dispatch({ type: LOGIN_STATES.SUCCESS, payload: res.data });
            navigate('/');
        } catch (err) {
            dispatch({ type: LOGIN_STATES.FAILURE, error: true });
        }
    }

    return (
        <div className='auth'>
            <h1 className='authTitle'>Login</h1>
            <form className='authForm' onSubmit={handleSubmit}>
                <input className='authInput' type='text' placeholder='email' name='email' ref={userRef} />
                <input className='authInput' type='password' placeholder='password' name='password' ref={passwordRef} />
                <button className='authButton' disabled={isFetching}>Sign In</button>
                {error && <span className='authWarning'>{error}</span>}
                <span className='authRedirect'>Not registered yet? <Link to='/register'>Register</Link></span>
            </form>
        </div>
    )
}

export default Login;