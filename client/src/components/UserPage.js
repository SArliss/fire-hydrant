import React from 'react';
import { Link } from 'react-router-dom';
import FeedForm from './FeedForm';
import UserProfile from './UserProfile';
import Pack from './Pack';
import UserLoggedOut from './UserLoggedOut';
import Announcements from './Announcements';


function Header(props) {


  return (
    <div className="App">
      {props.currentUser ?
        <div className="user-loggedin">
          <UserProfile handleLogout={props.handleLogout}/>

          <div className="user-feed">

            <nav>
              <button>Personal</button>
              <button>Office</button>
              <button>Pack</button>
              <a href="#global-announcements"><button>Global</button></a>
            </nav>

            <main>
              <FeedForm />
              <Pack />
            </main>

            <aside id="global-announcements">
              <Announcements />
            </aside>

          </div>

        </div>

        :

        <UserLoggedOut handleLogin={props.handleLogin}/>
      }
    </div>
  )
}

export default Header;

