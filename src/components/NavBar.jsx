import React from 'react';
import { Link } from 'react-router-dom';
import index from '../assets/index'

const NavBar = () => {
  return (
    <div className='menu'>
      <ul className="menu__ul">
        <li className="menu__li">
          <Link className='li__a' referrerPolicy='no-referrer' to="/">
            <img className='a__logo' src={index.logo} alt="logo" />
        </Link>
        </li>
        <li className="menu__li">
          <Link className='li__a' referrerPolicy='no-referrer' to="/">Home</Link>
        </li>
        <li className="menu__li">
          <Link className='li__a' referrerPolicy='no-referrer' to="/login">Login</Link>
        </li>
        <li className="menu__li">
          <Link className='li__a' to="/purchases">Purchases</Link>
        </li>
        <li className="menu__li">
          <button className='li__button'>Cart</button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;