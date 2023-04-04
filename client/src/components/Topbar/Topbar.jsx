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
                            RECIPES
                        </Link>
                    </li>
                    <li className='cat'>
                        <Link className='link' to='/?cat=food'>
                            FOOD
                        </Link>
                    </li>
                    <li className='cat'>
                        <Link className='link' to='/?cat=nutrition'>
                            NUTRITION
                        </Link>
                    </li>
                    {currentUser && <li className="cat">Sign Out</li>}
                </ul>
            </div>
            <div className='top-right'>
                <i className="topSearchIcon fas fa-search"></i>
                {currentUser &&
                    <Link className="link" to="/write">
                        <span className='link-post'>POST</span>
                    </Link>
                }
            </div>
        </div>
    );
}

export default Topbar