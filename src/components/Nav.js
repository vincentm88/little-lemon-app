import React from 'react';
import './Nav.css'; // Import CSS file
import logo from '../images/Logo.svg';
import '../index.css';
import { Link } from 'react-router-dom';

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
                <Link className='btnlink' to="/"><img src={logo} alt="Little Lemon Logo" /></Link>
                <ul style={ulStyles}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/reservations">Reservations</Link></li>
                    <li><Link to="/order-online">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
                <button className="hamburger-menu">☰</button>
            </nav>
        </div>
    );
}

export default Nav;
