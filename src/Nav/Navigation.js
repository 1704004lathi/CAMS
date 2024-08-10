import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from '../logo bg removed (2).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';

function Navigation() {
  const { getCartCount } = useCart();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="container nav">
      <div className="logo">
        <img src={logo} alt="NXT LVL" />
      </div>
      <ul>
        <li>
          <Link to="/" className="selected">
            Home
          </Link>
        </li>
        <li>
          <Link to="/AboutUs">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/Service">Service</Link>
        </li>
       
        {/* <li>
          <Link to="/Login">Login</Link>
        </li> */}
      </ul>
      {/* <div className="icon-link">
        <Link to="/Cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          {getCartCount() > 0 && (
            <span className="cart-count">{getCartCount()}</span>
          )}
        </Link>
      </div> */}
      <div className="icon-link">
        <Link to="/Login">
          <FontAwesomeIcon icon={faUser} className='icon-white'/>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
