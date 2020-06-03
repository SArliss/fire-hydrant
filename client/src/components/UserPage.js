import React from 'react';
import { Link } from 'react-router-dom';
import DogPic from '../images/Dog1.jpeg';
import BowPic from '../images/Group18.svg'
import InvitePic from '../images/Group51.svg'
import Navbar from './Navbar'
import UserFeed from './UserFeed'

function Header(props) {
  return (

    <div className="user-page">
      <header className="user-page-header">
        <div>
          {props.currentUser ?
            <div className="user-page-aside">
              <div>
                <Link to="/login" onClick={props.handleLogout}><p>Logout</p></Link>
              </div >

              <div className="user-profile-picture">
                <img className="user-profile-picture" src={DogPic} alt="prof-pic"></img>
              </div>

              <div className="greeting">
                {/* <h2>Derek Frank</h2> */}
                <h1>{localStorage.getItem('name')}</h1>

                <h3>Solutions Engineer</h3>
                {/* <h1>{localStorage.getItem('position')}</h1> */}

                <h3>New York, NY</h3>
                {/* <h1>{localStorage.getItem('location')}</h1> */}

              </div>

              <div className="user-posts">
                <Link to="/create-post"><button className="userButtons">Create post</button></Link>
                <Link to="/user-posts"><button className="userButtons">See my posts</button></Link>
              </div>
              <br />

              <div className="user-pack">
                <hr />
                <h1> Current Pack</h1>
                <img src={InvitePic} alt="invite-pic" />
                <h4> Add teammates for group messaging</h4>
                <hr />
                <br />
              </div>

              <div className="user-bow">
                <h1> Bow</h1>
                <img src={BowPic} alt="bow-pic" />
                <h3> Messages</h3>
                <h4> Add teammates for group messaging</h4>
              </div>

            </div>
            :
            <div className="guest-landing">
              <Link to="/login"><h4>Login</h4></Link>
              <Link to="/register"><h4>Register</h4></Link>
            </div>
          }

      
      </div>

      </header>

      <div className="user-page-feed">
        <Navbar />
        <UserFeed />
      </div>
    </div>


  )
}

export default Header;

