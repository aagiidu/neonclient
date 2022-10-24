import React from 'react';
import {Link} from 'react-router-dom';

export default function Login() {
  return (
    <React.Fragment>
      <h2 className={'page-title'}>Login</h2>
      <div className={'content-block'}>
        This is login page
        <Link to='/home'>Back to home</Link>
      </div>
    </React.Fragment>
)}
