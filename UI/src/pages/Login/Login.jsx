import React, { useState } from "react";
import { handleNavigate } from '../../components/Navigate';
import "./login.css";

export const Login = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login_container">
      <h2>CreditPath</h2>
      <div>
        <span className="login_text_username">Username:</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <span className="login_text_password">Password:</span>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button onClick={() => handleNavigate("/home")}>Login</button>
    </div>
  );
};
