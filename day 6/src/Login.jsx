import React, { useState } from 'react';
import '../assets/css/login.css';
import LogoImage from './login_logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { login } from './Component/Redux/UserSlice';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      alert('Please enter both email and password.');
    } else if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
    }else{ 
      alert('Login successful!');
      dispatch(login(email)); //emailPass just the username as the payload
         navigate("/home");
      
    }
  };
  
  const isValidEmail = (email) => {
    
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  
  const linkStyle = {
    textDecoration: 'none',
    color: 'blue',
  };
  
  return (
    <div className="container">
      <div className="logo-container">
      
   <Link to="/home" className="logo-button">
        
  
        <img src={LogoImage} alt="Logo" className="logo" />
        {/* <h3>SKY HEALTH INSURANCE</h3> */}
         </Link>
      </div>
      <div className="image-container"></div>
      <div className="form-container signup">
        <h1>Your health and financial safety is our higher priority!!</h1>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Enter your username"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="logbutton">
            Login
          </button>
        </form>
        <div className="new">
          <Link to="/sign" style={linkStyle}>
            Create New Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;