import React from 'react';
import './Footer.css';

const Footer = () => {
    const year = () => {
        const d = new Date();
        const y = d.getFullYear();
        return y;
    }
    
    return (
        <footer className="text-center p-5">
            <small>
                Travel Guide Bangladesh &copy; {year()}. All rights reserved.
            </small>
        </footer>
    );
};

export default Footer;