import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {adminRoutes} from './app-routes';

export default function AdminLayout() {
  console.log('routes', adminRoutes)
		return (
      <>
        <div className='main'>
          <div className='top-bar'>Top bar (Admin layout)</div>
          <div className='aside'>
            <ul>
              {adminRoutes.map(({ path, component }) => (
                <li key={path}><Link key={path} to={path}>{path}</Link></li>
              ))}
            </ul>
          </div>
          <div className="content">
            <Routes>
              {adminRoutes.map(({ path, component }) => (
                <Route
                  key={path}
                  path={path}
                  element={component}
                />
              ))}
            </Routes>
          </div>
        </div>
        <footer>
          Copyright ©{new Date().getFullYear()} {'Footer title'}
        </footer>
      </>
    )
}
