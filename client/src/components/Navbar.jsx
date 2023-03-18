import { useContext } from 'react';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Navbar = () => {

    const {logout} = useContext(AuthContext);

    const {currentUser} = useContext(AuthContext);

    return (
        <div className='navbar'>
            <div className='container'>
                <div className='logo'>
                    <Link to='/'>
                        <img src={Logo} alt='logo'/>
                    </Link>
                </div>
                <div className='links'>
                    <Link className='link' to='/?cat=recipes'>
                        <h6>Recipes</h6>
                    </Link>
                    <Link className='link' to='/?cat=food'>
                        <h6>Food</h6>
                    </Link>
                    <Link className='link' to='/?cat=nutrition'>
                        <h6>Nutrition</h6>
                    </Link>
                    <span>{currentUser?.name}</span>
                    {currentUser ? <span onClick={logout}>Sign Out</span> : <Link className='link' to='/login'>Sign In</Link>}
                </div>
            </div>
        </div>
    )
}

export default Navbar;