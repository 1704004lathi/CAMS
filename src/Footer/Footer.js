import React from 'react';
import './Footer.css';
import Logo from '../logo bg removed (2).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
         <img src={Logo} alt="Logo" />
          <h1>Welcome to NXT LVL</h1>
        </div>
        <div className="footer-links">
          <a href="/" className="footer-link">Home</a>
          <a href="AboutUs" className="footer-link">About</a>
          <a href="/Service" className="footer-link">Services</a>
          <a href="/Contact" className="footer-link">Contact</a>
          <a href="/Review" className="footer-link">Feedback</a>
        </div>
        <div className="footer-socials">
          <a href="https://facebook.com" className="social-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" /> Facebook
          </a>
          <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="social-icon" /> Twitter
          </a>
          <a href="https://instagram.com" className="social-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" /> Instagram
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Futuristic Footer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;