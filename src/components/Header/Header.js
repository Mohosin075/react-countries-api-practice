import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <ul className='nav-item'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">About</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;