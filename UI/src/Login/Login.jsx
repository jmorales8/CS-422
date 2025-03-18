import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const isFormValid = formData.name && formData.email && formData.password;


  const handleLogin = () => {
    if (isFormValid) {
      setIsAuthenticated(true);
      navigate('/home');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      <button onClick={handleLogin} disabled={!isFormValid}>Enter</button>
    </div>
  );
};

export default Login;
