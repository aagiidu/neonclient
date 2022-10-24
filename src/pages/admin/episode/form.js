import React from 'react';
import {Link} from 'react-router-dom';

export default function EpisodeForm() {
  return (
    <>
      <h2 className={'page-title'}>Front page</h2>
      <div className={'content-block'}>
        This is FRONT page
        <Link to='/login'>Login</Link>
      </div>
    </>
)}
