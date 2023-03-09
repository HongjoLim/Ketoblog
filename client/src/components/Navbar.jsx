import React from "react";
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className="logo">
                    <Link to='/'>
                        <img src={Logo} alt='logo'/>
                    </Link>
                </div>
                <div className='links'>Links</div>
            </div>
        </div>
    )
}

export default Navbar;