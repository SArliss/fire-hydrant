import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/datadog-logo.png';

const userLoggedOut = (props) => {
  return (
    <div className="user-loggedout">
      <div className="header-logo">
        <img src={logo} alt="datadog logo" ></img>
      </div>
      <h3>In order to access the Fire Hydrant feed, you must be logged-in.</h3>
      <Link to="/login"><button>Login</button></Link>
      <br></br>
      <Link to="/register"><button>Register</button></Link>
      <br></br>
      <Link to="/user" id="guest-button" onClick={(e) => props.handleLogin(e, { email: "guest@email.com", password: "1234" })}><button>Guest</button></Link>
      <p>If you have any questions or concerns, please contact: </p>
      <a href="mailto: sinaraarliss@gmail.com" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 20 20"><path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z" fill="rgb(104, 136, 223)"></path></svg>
              sinaraarliss@gmail.com
          </a>
    </div>
  )
}

export default userLoggedOut;

