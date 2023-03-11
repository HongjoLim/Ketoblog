import React from 'react';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='logo'>
                    <Link to='/'>
                        <img src={Logo} alt='logo'/>
                    </Link>
                </div>
                <div className='links'>
                    <Link className='link' to='/?cat=blogs'>
                        <h6>Blogs</h6>
                    </Link>
                    <Link className='link' to='/?cat=recipes'>
                        <h6>Recipes</h6>
                    </Link>
                    <Link className='link' to='/?cat=Food'>
                        <h6>Food</h6>
                    </Link>
                    <Link className='link' to='/?cat=nutrition'>
                        <h6>Nutrition</h6>
                    </Link>
                    <span>UserName</span>
                    <span>Sign out</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;