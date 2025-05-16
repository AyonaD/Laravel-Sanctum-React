import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r hidden md:block">
      <nav className="p-4 space-y-4">
        <Link to="/dashboard" className="block">Home</Link>
        <Link to="/dashboard/profile" className="block">Profile</Link>
      </nav>
    </aside>
  )
}

export default Sidebar