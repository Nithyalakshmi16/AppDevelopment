import React, { useState } from 'react';
import '../asset/css/login.css';
import { Link } from 'react-router-dom';
function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

 
  const handleSubmit = (event) => {
    event.preventDefault();
  
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>
        <div> <h2>Login</h2></div>
     
      <form onSubmit={handleSubmit} className='container'>
        <div className='user'>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className='pass'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
          <button type="submit" className='submit'>Login</button>
        </div>
        <div>
       <Link to="/Signup">
        <button type="submit" className='submit'>signup</button>
       </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
