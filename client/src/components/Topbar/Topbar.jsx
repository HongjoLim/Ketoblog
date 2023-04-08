import { useContext } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import { AuthContext } from '../../context/authContext';
import './Topbar.css';

const Topbar = () => {

    const { logout } = useContext(AuthContext);

    const { currentUser } = useContext(AuthContext);

    return (
        <div className='top'>
            <div className='top-left'>
            </div>
            <div className='top-center'>
                <ul className='cats'>
                    <li className='cat'>
                        <Link className='link' to='/?cat=recipes'>
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
                {currentUser ?
                    <Link className='link' to='/login'>
                        <span className='top-right-authLink'> Sign Out</span>
                    </Link> :
                    <Link className='link' to='/login'>
                        <span className='top-right-authLink'> Log In</span>
                    </Link>
                }
                {currentUser &&
                    <Link className="link" to="/write">
                        <span className='link-post'>Post</span>
                    </Link>
                }
                {currentUser &&
                    <Link className="link" to="/account">
                        <span className='link-post'>Account</span>
                    </Link>
                }
            </div>
        </div>
    );
}

export default Topbar