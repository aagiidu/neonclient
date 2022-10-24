import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {userRoutes} from './app-routes';

export default function UserLayout() {
  console.log('routes', userRoutes)
		return (
      <>
        <div className='main'>
          <div className='top-bar'>Top bar (content layout)</div>
          <div className='aside'>
            <ul>
              {userRoutes.map(({ path, component }) => (
                <Link
                  key={path}
                  to={path}
                >{path}</Link>
              ))}
            </ul>
          </div>
          <div className="content">
            <Routes>
              {userRoutes.map(({ path, component }) => (
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
