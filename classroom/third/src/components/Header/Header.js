import React from 'react';
import logo from './../../logo.svg';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="logo" />
      <a
        className="header-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        React
      </a>
    </header>
  );
}

export default Header;
