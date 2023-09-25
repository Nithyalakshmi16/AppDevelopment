// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../assets/Style.css'; // Import your CSS for styling


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/privacy" className='footer-info'>
          Privacy Policy
        </Link>
        <Link to="/terms-and-conditions" className='footer-info'>
          Terms and Conditions
        </Link>
        <Link to="/faq" className='footer-info'>
          FAQ
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
