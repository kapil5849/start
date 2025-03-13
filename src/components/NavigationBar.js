import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavigationBar.css';
import Logo from '../assets/dsa.png';

const NavigationBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo">
            <img src={Logo} alt='logo' />
          </div>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/dsa">DSA</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
