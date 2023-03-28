import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <nav className='h-20 bg-primary flex justify-between items-center md:px-20'>
            <img src={logo} alt="" />
            <div className='nav-link flex gap-5  text-white '>
                <a href="/order">Order</a>
                <a href="/orderReview">Order Review</a>
                <a href="/manageInventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>


        </nav>
    );
};

export default Header;