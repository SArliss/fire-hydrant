import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/datadog-logo.png';
import dogs from '../images/dog-meeting.jpg';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        {this.props.currentUser ?
          <div className="logged-in">
            <h5>Status: Active / Logged-in.</h5>
            <h5>><Link to="/user">Main Page</Link></h5>
          </div>
          :
          <div className="login-page">
            <div className="login-page-left">
              <img src={dogs} alt="dog reunion" id="dog-meeting"></img>
              <h6>Copyright 2016 The New Yorker Image by Danny Shanahan. <br></br>All Rights Reserved.</h6>
              <div className="login-form">
                <form onSubmit={(e) => this.props.handleLogin(e, this.state)}>
                  {this.state.errorText && <p className="error-text">{this.state.errorText}</p>}
                  <br></br>
                  <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="Email"
                  />
                  <br></br>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder="Password"
                  />
                  <br></br>
                  <button>LOGIN</button>
                  <br></br>
                  <section>
                    <div className="or-section"><p>or</p></div>
                    <Link to="/register"><p>Create a new account</p></Link>
                  </section>
                </form>
              </div>   
            </div>

            <div className="login-page-right">
              <div className="datadog-logo">
                <img src={logo} alt="datadog logo" ></img>
              </div>
              <h1>Welcome to the pack!</h1>
              <h3>Sign in or register for a new account to start talking to other top dogs.</h3>
            </div>

          </div>
        }
      </div>
    )
  }
}
