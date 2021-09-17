import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="navul">
                <Link to='/'>
                <li >HomePage</li>
                </Link>
                <Link to='/about'>
                <li >AboutUs</li>
                </Link>
                <Link to='/contact'>
                <li >ContactUs</li>
                </Link>
                </ul>
        </nav>
    );
}

export default Nav;