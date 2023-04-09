import { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/authContext';
import './Topbar.css';

const Topbar = () => {

    const { login, logout } = useContext(AuthContext);

    const { currentUser } = useContext(AuthContext);

    return (
        <div className='top'>
            <div className='top-left'>
            </div>
            <div className='top-center'>
                <ul className='cats'>
                    <li className='cat'>
                        <Link className='link' to='/?cat=food'>
                            Recipes
                        </Link>
                    </li>
                    <li className='cat'>
                        <Link className='link' to='/?cat=food'>
                            Food
                        </Link>
                    </li>
                    <li className='cat'>
                        <Link className='link' to='/?cat=nutrition'>
                            Nutrition
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='top-right'>
                <i className="topSearchIcon fas fa-search"></i>
                <ul className='links'>
                    {currentUser &&
                        <li className='link-post'>
                            <Link className="link" to="/write">
                                Post
                            </Link>
                        </li>
                    }
                    {currentUser &&
                        <li className='link-account'>
                            <Link className="link" to="/account">
                                Account
                            </Link>
                        </li>
                    }
                    {currentUser ?
                        <li className='link-auth'>
                            <Link className="link" to={logout}>
                                Log Out
                            </Link>
                        </li> :
                        <li className='link-auth'>
                            <Link className="link" to={login}>
                                Log In
                            </Link>
                        </li>
                    }
                </ul>
            </div>
        </div>
    );
}

export default Topbar