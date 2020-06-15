import React from 'react';
import { Link } from 'react-router-dom';
import FeedForm from './FeedForm';
import logo from '../images/datadog-logo.png';

function Header(props) {


  return (

    <div className="App">

      {props.currentUser ?

        <div className="user-loggedin">

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

          <div className="user-feed">
            <nav>
              <button>Feed</button>
              <button>Global</button>
              <button>Office</button>
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
                  <img src="https://image4.owler.com/ceo/Olivier_Pomel_owler_20190822_020224_original.jpg" alt="Oliver Pomel DataDog CEO"></img>
                </div>
                <div>
                  <h3>Olivier Pomel</h3>
                  <h4>Alpha Dog, CEO & Co-Founder<br></br>New York</h4>
                  <p>Apr. 19, 2020<br></br>Covid 19 Update: In light of the global pandemic, all Datadog employees may work remotely in accordance with local health and safety regulations. Please reach out to your managers with individual questions. </p>
                </div>
              </div>
              <div className="announcement">
                <div className="announcement-photo">
                  <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="Business Partner"></img>
                </div>
                <div>
                  <h3>Sinead O'Ryan</h3>
                  <h4>HR Business Partner<br></br>Dublin</h4>
                  <p>Mar. 17, 2020<br></br>Happy St.Patrick’s Day everyone! Have fun and stay safe!</p>
                </div>
              </div>
            </aside>
          </div>
        </div>

        :

        <div className="user-loggedout">
          <div className="header-logo">
            <img src={logo} alt="datadog logo" ></img>
          </div>
          <h3>In order to access the Fire Hydrant feed, you must be logged-in.</h3>
          <Link to="/login"><button>Login</button></Link>
          <br></br>
          <Link to="/register"><button>Register</button></Link>
          <br></br>
          <Link id="guest-button" onClick={(e) => props.handleLogin(e, {email: "guest@email.com", password: "1234"})}><button>Guest</button></Link>
          <p>If you have any questions or concerns, please contact: </p>
          <a href="mailto: sinaraarliss@gmail.com" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 20 20"><path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z" fill="rgb(104, 136, 223)"></path></svg>
              sinaraarliss@gmail.com
          </a>
        </div>
      }

    </div>
  )
}

export default Header;

