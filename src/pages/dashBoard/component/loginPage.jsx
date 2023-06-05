
import React, { useState } from 'react';
import '../styles/LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // TODO: Make API call to validate user's credentials
    window.location.href = "/homepage";
  };

  const handleRegisterClick = () => {
    window.location.href = "/register";
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <form className="login-form" onSubmit={handleLoginSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />

        <button type="submit" className="login-button">Login</button>
      </form>
      
      <button type="previous" className="previous-button" onClick={()=>{window.location.href = "/page9"}} > Previous</button>

    </div>
  );
}

export default LoginPage;

