import { useEffect,useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Login from './component/Login';
import api from './service/Api';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardHome from './pages/DashboardHome';
import Profile from './pages/Profile';

function App() {
   const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true); // track auth check

  useEffect(() => {
    api.get('/api/user')
      .then(res => {
        setUser(res.data);
      })
      .catch(() => {
        setUser(null);
      })
      .finally(() => setCheckingAuth(false));
  }, []);
  if (checkingAuth) return <p>Loading...</p>;
  return (
    <>
      <BrowserRouter>
      <Routes>
        {/* Public Login Route */}
        <Route path="/" element={!user ? <Login setUser={setUser}/> : <Navigate to="/dashboard" />} />

        {/* Protected Dashboard Routes */}
        {user && (
          <Route path="/dashboard" element={<DashboardLayout user={user} />}>
            <Route index element={<DashboardHome />} />
            <Route path="profile" element={<Profile user={user}/>} />
          </Route>
        )}

        {/* Catch-all fallback */}
        <Route path="*" element={<Navigate to={user ? "/dashboard" : "/"} />} />
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
