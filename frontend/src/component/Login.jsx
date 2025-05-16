import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import this
import api from '../service/Api';

export default function Login({ setUser  }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // ✅ Use this

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // First get CSRF cookie from Laravel Sanctum
      await api.get('/sanctum/csrf-cookie');

      // Then post login credentials
      await api.post('/api/login', { email, password });

      setMessage('Login successful!');
      
      // onLoginSuccess();
      const res = await api.get('/api/user');
      setUser(res.data);
    console.log('User:', res.data); // Optional

    // Redirect to dashboard
    navigate('/dashboard'); // if using React Router

    } catch (error) {
       setMessage(error.response?.data.message || 'Login failed');
      setError(error.response?.data.message || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      {message && <p>{message}</p>}
    </form>
  );
}
