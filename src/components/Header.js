import React from 'react';
import logo from '../images/logo.svg';

const Header = (props) => (
  <div className="header">
    <img src={logo} className="app-logo" alt="logo" />
    <h1 className="header__title">{props.title}</h1>
    <h2 className="header__subtitle">{props.subtitle}</h2>
  </div>
);

Header.defaultProps = {
  title: 'Functions'
};

export default Header;