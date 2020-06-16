import React from 'react';
import FeedForm from './FeedForm';
import UserProfile from './UserProfile';
import Pack from './Pack';
import UserLoggedOut from './UserLoggedOut';
import Announcements from './Announcements';

class UserPage extends React.Component {
  constructor() {
    super();
    this.state = {
      yourPosts: false,
      allPosts: false,
      pack: true,
      form: false,
      announcements: false
    }
  }

  render() {
    return (
      <div className="App">
        {this.props.currentUser ?
          <div className="user-loggedin">
            <UserProfile handleLogout={this.props.handleLogout} />

            <div className="user-feed">

              <nav>
                <button onClick={e => this.setState({ pack: false, form: true, announcements: true, yourPosts: true, allPosts: false })}>Your Posts</button>
                <button onClick={e => this.setState({ pack: false, form: true, announcements: true, yourPosts: false, allPosts: true })}>All Posts</button>
                <button onClick={e => this.setState({ pack: true, form: false, announcements: false, yourPosts: false, allPosts: false })}>Pack</button>
                <button onClick={e => this.setState({ pack: false, form: false, announcements: true, yourPosts: false, allPosts: false })}>Global</button>
              </nav>

              <main>
                {this.state.form && <FeedForm />}
                {this.state.pack && <Pack />}
              </main>

              {this.state.announcements && <Announcements />}

            </div>

          </div>

          :

          <UserLoggedOut handleLogin={this.props.handleLogin} />
        }
      </div>
    )
  }
}

export default UserPage;

