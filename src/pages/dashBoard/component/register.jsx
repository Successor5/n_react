import React from 'react';
import '../styles/Register.css';

function RegisterPage() {
  return (
    <div className="register-container">
      <h1 className="register-heading">Register</h1>
      <form className="register-form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />

        <button type="submit" className="register-button">Register</button>
      </form>
<button type="Previous" className="Previous-button" onClick={()=>{window.location.href = "/page9"}}
 > Previous</button>

    </div>
    
  );
}
export default RegisterPage