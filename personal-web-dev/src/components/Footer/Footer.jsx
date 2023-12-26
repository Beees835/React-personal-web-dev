import React from 'react';
import classes from './Footer.module.css';

function Footer() {
    return (
        <footer className={classes.footer}>
            <p>© {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;
