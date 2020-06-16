import React from 'react';
import { getUsers } from '../services/Api-helper';

class Pack extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      isLoading: false,
      error: ""
    }
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    try {
      const users = await getUsers();
      this.setState({
        users,
        isLoading: false
      })
    } catch (e) {
      this.setState({
        isLoading: false,
        error: e.message
      })
    }
  }

  render() {
    return (
      <div>

        <div className="loading-message">
          {this.state.isLoading &&
            <div>
              <div className="loader"></div>
              <p>Loading pack...</p>
            </div>}
          {this.state.error && <p className="error">{this.state.error}</p>}
        </div>

        <div className="users-wrapper">
          {this.state.users.map(user =>
            <div key={user.id} className="individual-user">
              <div className="user-info">
                <figure className="swap-on-hover">
                  <img className="swap-on-hover__front-image" src={user.first_img} alt={user.name}></img>
                  <img className="swap-on-hover__back-image" src={user.second_img} alt={user.name}></img>
                </figure>
                <div className="user-text">
                  <h2>{user.name}</h2>
                  <p>{user.position}</p>
                  <p>{user.location}</p>
                  <a href={`mailto:${user.email}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" /></svg>
                  </a>
                  <p style={{ fontStyle: "italic" }}>{user.fun_facts}</p>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Pack;

