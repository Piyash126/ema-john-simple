import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/">Shop</a>
                <a href="/order">Orders</a>
                <a href="/invenhrefry">Invenhrefry</a>
                <a href="/login">Login</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;