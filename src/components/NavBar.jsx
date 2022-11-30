import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import index from '../assets/index'
import CardSlidebar from './CardSlidebar';

const NavBar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
          <Link className='li__a' to="/purchases">
            Purchases
          </Link>
        </li>
        <li className="menu__li">
          <button
            className='li__button'
            onClick={handleShow}
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </li>
      </ul>
      <CardSlidebar show={show} handleClose={handleClose} />
    </div>
  );
};

export default NavBar;