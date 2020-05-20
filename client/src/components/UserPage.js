import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <div>
        {/* {props.currentUser ? */}
        <div className="user-page">
          <div>
            <Link to="/login" onClick={props.handleLogout}><p>Logout</p></Link>
          </div >

          <div className="greeting">
            <h1>Derek Frank</h1>
            {/* <h1>{localStorage.getItem('name')}</h1> */}
          </div>

          <div className="">
            <Link to="/create-post"><button>Create post</button></Link>
            <Link to="/user-posts"><button>See my posts</button></Link>
          </div>
        </div>
        {/* :
          <div className="guest-landing">
            <Link to="/login"><h4>Login</h4></Link>
            <Link to="/register"><h4>Register</h4></Link>
          </div>
        } */}
      </div>
    </header>
  )
}

export default Header;

