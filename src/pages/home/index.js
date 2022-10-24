import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <React.Fragment>
      <h2 className={'page-title'}>Home</h2>
      <div className={'content-block'}>
        This is home page
        <Link to='/login'>Login</Link>
      </div>
    </React.Fragment>
)}
