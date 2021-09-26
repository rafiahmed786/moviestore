import React from 'react';
import './header.css'
import logo from '../logo.png'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" width='350px' />
           <h2>Over 1000 of Movies</h2>
        </div>
    );
};

export default Header;