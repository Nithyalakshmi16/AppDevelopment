import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice.jsx';
import '../assets/Style.css';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // Check if the entered username and password match the condition
    if (formdata.username === 'admin2003' && formdata.password === '12345') {
      dispatch(login({
        username: formdata.username
      }));
      navigate('/Dashboard'); // Navigate to the dashboard on successful login
    } else {
      dispatch(login({
        username: formdata.username
      }));
      navigate("/Eduuser")
      // Display an error message or handle the login failure here
      console.log('Invalid username or password');
    }
  };

  return (
    <div className='login'>
      <div className='auth-container'>
        <div className='auth-wrapper'>
          <form className='auth-form app-x-shadow' onSubmit={submitHandler}>
            <h1 className='auth-heading'>Login form</h1>
            <input type='text' name='username' id='username' value={formdata.username} onChange={handleChange} placeholder='username' className='auth-field' required />
            <input type='password' name='password' id='password' value={formdata.password} onChange={handleChange} placeholder='password' className='auth-field' required />

            <button type='submit' className='auth-btn app-x-shadow'> Login </button>
          </form>
          <Link to='/Register' className='auth-links'>Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
