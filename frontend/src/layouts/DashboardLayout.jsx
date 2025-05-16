import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../component/Header'
import Footer from '../component/Footer'
import Sidebar from '../component/Sidebar'

function DashboardLayout({ user }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header user={user}/>
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default DashboardLayout