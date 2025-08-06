import React, { useState } from 'react';
import '../stylesheets/adminlogin.css';
import { useNavigate } from 'react-router-dom';

const Adminlogin = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

   const goToHome = () => {
      navigate('/');
    };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://setc-backend.onrender.com/admin/adminlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        navigate('/manage-site');
      } else {
        // Login failed — show alert
        alert(data.message || 'Invalid credentials');
      }
    } catch (err) {
      console.error('Login request failed:', err);
      alert('Server error. Please try again later.');
    }
  };

  return (
    <div className="adminlogin-container">
      <p className='adminlogin-container_back'  onClick={goToHome}>Back</p>
      <div className="adminlogin-content">
        <div className="adminlogin-container1">
          <p className='adminlogin-container1_title'>Admin Login</p>
          <p className='adminlogin-container1_desc'>Please enter the password below.</p>
        </div>

        <form className="adminlogin-form" onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">GO</button>
        </form>
      </div>
    </div>
  );
};

export default Adminlogin;
