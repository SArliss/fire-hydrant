import React from 'react';
import { Link } from 'react-router-dom';

const userProfile = (props) => {
  return (
    <div className="user-profile">
      <div id="user-profile-status">
        <Link to="/login" onClick={props.handleLogout}>Logout</Link>
      </div>
      <div className="user-profile-picture">
        {localStorage.getItem('first_img') && <img src={localStorage.getItem('first_img')} className="user-profile-picture" alt="profile"></img>}
      </div>
      <div className="user-profile-info">
        {localStorage.getItem('name') && <h1>{localStorage.getItem('name').replace(/^\w/, (c) => c.toUpperCase())}</h1>}
        {localStorage.getItem('position') && <h3>{localStorage.getItem('position').replace(/^\w/, (c) => c.toUpperCase())}</h3>}
        {localStorage.getItem('location') && <h3>{localStorage.getItem('location').replace(/^\w/, (c) => c.toUpperCase())}</h3>}
      </div>
    </div>
  )
}

export default userProfile;

