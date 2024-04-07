import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
 
const Login = () => {  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();
 
  const handleLogin = () => {
    if (username === 'Jaya' && password === '1234') {
      console.log('Login successful');
      setLoginMessage('Login successful');
      navigate('/Home', { state: { username: username } });
    } else {
      console.log('Wrong password. Please try again.');
      setLoginMessage('Wrong password. Please try again.');
    }
  };
 
  return (
    <div className= 'loginContainer'>
      <h1 className='loginTitle'>Login Page</h1>
      <img className='profile' src={require("./myImage.jpg")} />
      <form className='form'>
        <label className='label' htmlFor="username">Username:</label>
        <input className='input-box'
          type="text"
          id="username"
          placeholder="Enter your username"   
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label className='label' htmlFor="password">Password:</label>
        <input className='input-box'
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label className='label'>
          <input type="checkbox" />
          <div className='rememberMe'>  Keep me logged in</div>
        </label>
        <button type="button" className='login-button' onClick={handleLogin}>
          Login
        </button>
        <p>{loginMessage}</p>
      </form>
    </div>
  );
};
 
export { Login };