import React from 'react';
import './Header.css';

const Header = () => {
    return (
        //Header Section =========
        <div className = "header-container">
            <header className="header">
                <h1>Islamic Studies Conferences </h1>
                <h2>Total Budget: $22000</h2>
                <h3>Year:<i> 2021</i></h3>
                <blockquote>“Allah made you muslim because he wants to see you in JANNAH.<br/> All you have to do is prove that you’re worthy of it.”</blockquote>
            </header>
        </div>
    );
};

export default Header;