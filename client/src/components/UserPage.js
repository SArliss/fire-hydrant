import React from 'react';
import { Link } from 'react-router-dom';
import FeedForm from './FeedForm'

function Header(props) {

  return (
    <div className="App">

      {props.currentUser ?

        <div className="user-loggedin">

          <div className="user-profile">
            <div id="user-profile-status">
              <Link to="/login" onClick={props.handleLogout}><p>Logout</p></Link>
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

          <div className="user-feed">
            <nav>
              <button>Pack</button>
              <button>Water Cooler</button>
            </nav>

            <main>
              <FeedForm />
              <div>Content</div>
              <div>Content</div>
              <div>Content</div>
              <div>Content</div>
              <div>Content</div>
            </main>

            <aside>
              <h1>Global Announcements</h1>
              <div className="announcement">
                <div className="announcement-photo">
                  <img></img>
                </div>
                <div>
                  <h3>Olivier Pomel</h3>
                  <h4>Alpha Dog, CEO & Co-Founder</h4>
                  <h4>New York</h4>
                  <p>Apr. 19, 2020</p>
                  <p>Covid 19 Update: In light of the global pandemic, all Datadog employees may work remotely in accordance with local health and safety regulations. Please reach out to your managers with individual questions. </p>
                </div>
              </div>
              <div className="announcement">
                <div className="announcement-photo">
                  <img></img>
                </div>
                <div>
                  <h3>Sinead McIvoy</h3>
                  <h4>HR Business Partner</h4>
                  <h4>Dublin</h4>
                  <p>Mar. 17, 2020</p>
                  <p>Happy St.Patrick’s Day everyone! Have fun and stay safe!</p>
                </div>
              </div>
            </aside>
          </div>
        </div>

        :

        <div className="user-loggedout">
          <Link to="/login"><h4>Login</h4></Link>
          <Link to="/register"><h4>Register</h4></Link>
        </div>
      }

    </div>
  )
}

export default Header;

