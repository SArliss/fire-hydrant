import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';

// custom components 
import { registerUser, loginUser, verifyUser } from './services/Api-helper';
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
  }

  componentDidMount() {
    verifyUser();
    if (localStorage.getItem('authToken')) {
      const id = parseInt(localStorage.getItem('id'));
      const username = localStorage.getItem('name');
      const email = localStorage.getItem('email');
      const user = { username, email, id };
      user && this.setState({
        currentUser: user
      })
    }
  }


  render() {
    return (
      <div className="App">

        <Route path="/login" render={() => (
          <Login
            handleLogin={this.handleLogin}
            errorText={this.state.errorText}
            currentUser={this.state.currentUser}
          />
        )} />

        <Route path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            errorText={this.state.errorText}
            currentUser={this.state.currentUser}
          />
        )} />

        <Route exact path="/user" render={() => (
          <UserPage
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            loggedIn={this.state.currentUser}
            currentUser={this.state.currentUser}
          />
        )} />

      </div>
    );
  }
}

export default withRouter(App);