import React, { Component } from 'react';
import logo from '../images/datadog-logo.png';
import dogo from '../images/dog-by-computer.jpg';
import { Link } from 'react-router-dom';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    // Same as const name = e.target.name // const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="register">
        {this.props.errorText && <p>{this.props.errorText}</p>}

        <header>
          <div className="datadog-logo-register">
            <img src={logo} alt="datadog logo" ></img>
          </div>
          <div className="header-description">
            <h1>New Account</h1>
            <h3>Create an account so we can tailor the content for you.</h3>
          </div>
        </header>

        <div className="register-form login-page">
          <div className="register-page-left login-page-left">
            <form onSubmit={(e) => this.props.handleRegister(e, this.state)}>
              {this.state.errorText && <p className="error-text">{this.state.errorText}</p>}
              <br></br>
              <section className="uploading-images">
                <input
                  type="text"
                  name="primaryImage"
                  value={this.state.primaryImage}
                  onChange={this.handleChange}
                  placeholder="Primary Image"
                />
                <input
                  type="text"
                  name="secondaryImage"
                  value={this.state.secondaryImage}
                  onChange={this.handleChange}
                  placeholder="Secondary Image"
                />
              </section>
              <br></br>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="Name"
              />
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
                type="text"
                name="Location"
                value={this.state.location}
                onChange={this.handleChange}
                placeholder="Location"
              />
              <br></br>
              <input
                type="text"
                name="position"
                value={this.state.position}
                onChange={this.handleChange}
                placeholder="Position"
              />
              <br></br>
              <input
                type="text"
                name="funFacts"
                value={this.state.funFacts}
                onChange={this.handleChange}
                placeholder="Fun Facts"
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
              <button>Sign up</button>
              <section>
                <div className="or-section"><p>or</p></div>
                <Link to="/login"><p>Login</p></Link>
              </section>
            </form>
          </div>

          <div className="register-page-right login-page-right">
            <img src={dogo} alt="nobody knows you are a dog" id="dog-by-computer"></img>
            <h6>Copyright 2016 The New Yorker Image by Danny Shanahan. <br></br>All Rights Reserved.</h6>
          </div>
        </div>
      </div>
    )
  }
}
