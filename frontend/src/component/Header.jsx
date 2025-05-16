import React from 'react'
import { useNavigate } from 'react-router-dom';

import api from './../service/Api'

function Header({ user }) {
    const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post('/api/logout');
      localStorage.removeItem('authUser'); // optional if using localStorage
      navigate('/');
      window.location.reload(); // to refresh state in App.jsx
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span>{user.name}</span>
        <button
          onClick={handleLogout}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </header>
  )
}

export default Header