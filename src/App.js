import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import UserLayout from './UserLayout';
import AdminLayout from './AdminLayout';
import {useAuth} from './context/auth'

function App() {

  //return <Content />;

  const { user, loading } = useAuth();
  
  if (loading) {
    return 'loading'; // <Loader />;
  }

  if (user && user.type === 1) {
    return <AdminLayout />;
  }
  //return <AdminLayout />;
  return <UserLayout />;
}

export default function Root() {

  return (
    <Router>
        <App />
    </Router>
  );
}
