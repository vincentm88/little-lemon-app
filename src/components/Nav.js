import React from 'react';
import './Nav.css'; // Import CSS file
import logo from '../images/Logo.svg';
import '../index.css';

const navMainStyles = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
}

const navStyles = {
    color: 'white',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 'var(--max-width)',
    alignItems: 'center',
    gap: '50px',
}

const ulStyles = {
    listStyle: 'none',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px',
}

function Nav() {
    return (
        <div style={navMainStyles}>
            <nav style={navStyles}>
                <img src={logo} alt="Little Lemon Logo"/>
                <ul style={ulStyles}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
                <button className="hamburger-menu">☰</button>
            </nav>
        </div>
    );
}

export default Nav;
