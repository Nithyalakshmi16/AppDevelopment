import React from 'react';
import '../assets/Style.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
function PrivacyPolicy() {
  return (
    <div className='policy'>
      <h1>Privacy Policy</h1>
      <p>
        This is the privacy policy of our website. We are committed to protecting your privacy and ensuring the security of your personal information.
      </p>
      <p>
        Here, you can outline your specific privacy policies, including how you collect, use, and protect user data. Be sure to include information about cookies, data retention, and any third-party services or analytics you may use.
      </p>
      <p>
        If you have any questions or concerns about our privacy practices, please don't hesitate to <a href="/contact">contact us</a>.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
