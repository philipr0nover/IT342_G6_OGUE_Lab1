import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    passwordHash: '', // This matches your Java User entity field
    role: 'USER'
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Connects to your XAMPP/Spring Boot backend
      const response = await axios.post('http://localhost:8080/api/auth/register', user);
      alert('Registration Successful! Check phpMyAdmin!');
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert('Registration Failed. Is your Backend running in IntelliJ?');
    }
  };

  return (
    <div style={{ padding: '50px', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      <div style={{ maxWidth: '400px', margin: 'auto', background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Lab 2: User Registration</h2>
        <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input name="firstName" placeholder="First Name" onChange={handleChange} style={inputStyle} required />
          <input name="lastName" placeholder="Last Name" onChange={handleChange} style={inputStyle} required />
          <input name="username" placeholder="Username" onChange={handleChange} style={inputStyle} required />
          <input name="passwordHash" type="password" placeholder="Password" onChange={handleChange} style={inputStyle} required />
          <button type="submit" style={buttonStyle}>Register to System</button>
        </form>
      </div>
    </div>
  );
}

// Simple styling to make your FRS screenshots look professional
const inputStyle = { padding: '10px', borderRadius: '4px', border: '1px solid #ddd' };
const buttonStyle = { padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' };

export default App;