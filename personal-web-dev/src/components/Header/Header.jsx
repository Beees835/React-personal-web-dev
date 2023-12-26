import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link to="/">MyPortfolio</Link>
            </div>
            <nav className={classes.nav}>
                <Link to="/about">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}

export default Header;
