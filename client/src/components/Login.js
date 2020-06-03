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
      <div className="login-page">
        {this.props.currentUser ?
          <div className="logged-in">
            <h5>Status: Active / Logged-in.</h5>
            <h5><Link to="/user">Main Page</Link></h5>
          </div>
          :
          <div>

            <header>
              <div className="header-logo">
                <img src={logo} alt="datadog logo" ></img>
              </div>
              <div className="header-title">
                <h1>Welcome to the pack!</h1>
                <h3>Sign in or register for a new account to start talking to other top dogs.</h3>
              </div>
            </header>

            <main>
              <form className="login-form" onSubmit={(e) => this.props.handleLogin(e, this.state)}>
                {this.state.errorText && <p className="error-text">{this.state.errorText}</p>}
               
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Email"
                />
      
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  placeholder="Password"
                />

                <button>LOGIN</button>
                
                <section>
                  <div className="or-section"><p>or</p></div>
                  <Link to="/register"><p>Create a new account</p></Link>
                </section>

              </form>

              <div className="login-picture">
                <img src={dogs} alt="dog reunion" id="dog-meeting"></img>
                <h6>Copyright 2016 The New Yorker Image by Danny Shanahan. All Rights Reserved.</h6>
              </div>
            </main>

          </div>
        }
      </div>
    )
  }
}
