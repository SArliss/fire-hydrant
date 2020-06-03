import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';

// custom components 
import { registerUser, loginUser, verifyUser, getUsers } from './services/Api-helper';
import Register from './components/Register';
import Login from './components/Login';
import UserPage from './components/UserPage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      currentUser: null,
      errorText: "",
      isLogging: false
    }
  }

  handleRegister = async (e, registerData) => {
    e.preventDefault();
    this.setState({ isLogging: true })
    const currentUser = await registerUser(registerData);
    if (!currentUser.errorMessage) {
      this.setState({
        currentUser,
        isLogging: false,
        errorText: ""
      });
      this.props.history.push('/user');
    } else {
      this.setState({
        errorText: currentUser.errorMessage,
        isLogging: false
      })
    }
  }

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    this.setState({ isLogging: true })
    const currentUser = await loginUser(loginData);
    console.log(currentUser);
    if (!currentUser.errorMessage) {
      this.setState({
        currentUser,
        isLogging: false,
        errorText: ""
      });
      this.props.history.push("/user");
    } else {
      this.setState({
        errorText: currentUser.errorMessage,
        isLogging: false
      })
      this.props.history.push("/login");
    }
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('id');
    localStorage.removeItem('location');
    localStorage.removeItem('position');
    localStorage.removeItem('fun_facts');
    localStorage.removeItem('first_img');
    localStorage.removeItem('second_img');
  }

  componentDidMount() {
    verifyUser();
    if (localStorage.getItem('authToken')) {
      const id = parseInt(localStorage.getItem('id'));
      const username = localStorage.getItem('name');
      const email = localStorage.getItem('email');
      const location = localStorage.getItem('location');
      const position = localStorage.getItem('position');
      const fun_facts = localStorage.getItem('fun_facts');
      const first_img = localStorage.getItem('first_img');
      const second_img = localStorage.getItem('second_img');
      const user = { username, email, id, location, position, fun_facts, first_img, second_img };
      user && this.setState({
        currentUser: user
      })
    }
  }


  render() {
    return (
      <div className="App">

        <div className="loading-message">
          {this.state.isLogging &&
            <div>
              <div className="loader"></div>
              <p>Logging...</p>
            </div>}
          {this.state.errorText && <p className="error">{this.state.errorText}</p>}
        </div>

        <Route exact path="/" render={() => (
          <Login
            handleLogin={this.handleLogin}
            loggedIn={this.state.currentUser}
            handleLogout={this.handleLogout}
            currentUser={this.state.currentUser}
            errorText={this.state.errorText}
          />
        )} />

        <Route path="/login" render={() => (
          <Login
            handleLogin={this.handleLogin}
            loggedIn={this.state.currentUser}
            handleLogout={this.handleLogout}
            currentUser={this.state.currentUser}
            errorText={this.state.errorText}
          />
        )} />

        <Route path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            currentUser={this.state.currentUser}
            errorText={this.state.errorText}
          />
        )} />

        <Route exact path="/user" render={() => (
          <UserPage
            handleLogin={this.handleLogin}
            loggedIn={this.state.currentUser}
            handleLogout={this.handleLogout}
            currentUser={this.state.currentUser}
          />
        )} />

      </div>
    );
  }
}

export default withRouter(App);