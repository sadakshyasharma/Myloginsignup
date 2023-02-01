import axios from 'axios';
import React from 'react'
import { useState } from 'react';

const Login = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
const [success, setSuccess] = useState(false);
  
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
  try {
    const res = await axios.post("http://my-doctors.net:8090/authentication", {
      email: email,
      password: password,
      strategy: "local",
    });
    setSuccess(true);
  } catch (error) {
    
  }
};
 
  return (
    <section className="section">
      <h1>Login</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="signupbox">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="signupbox">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <hr />
        {success && (
          <span>
            <h3>Login successfully.</h3>
          </span>
        )}
      </form>
    </section>
  );
}

export default Login;
