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
      password: "",
      location: "",
      position: "",
      fun_facts: "",
      first_img: "",
      second_img: "",
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
      <div className="login-page">
        {this.props.errorText && <p>{this.props.errorText}</p>}

        <header>
          <div className="header-logo">
            <img src={logo} alt="datadog logo" ></img>
          </div>
          <div className="header-title">
            <h1>New Account</h1>
            <h3>Create an account so we can tailor the content for you.</h3>
          </div>
        </header>

        <main>
          <form className="login-form" onSubmit={(e) => this.props.handleRegister(e, this.state)}>
            {this.state.errorText && <p className="error-text">{this.state.errorText}</p>}

            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Name"
            />

            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Email"
            />

            <input
              type="text"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
              placeholder="Location"
            />

            <input
              type="text"
              name="position"
              value={this.state.position}
              onChange={this.handleChange}
              placeholder="Position"
            />

            <input
              type="text"
              name="fun_facts"
              value={this.state.fun_facts}
              onChange={this.handleChange}
              placeholder="Fun Facts"
            />

            <section className="uploading-images">
              <input
                type="text"
                name="first_img"
                value={this.state.first_img}
                onChange={this.handleChange}
                placeholder="Primary Image URL"
              />
              <input
                type="text"
                name="second_img"
                value={this.state.second_img}
                onChange={this.handleChange}
                placeholder="Secondary Image URL"
              />
            </section>

            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
            />

            <button>Sign up</button>

            <section>
              <div className="or-section"><p>or</p></div>
              <Link to="/login"><p>Login</p></Link>
            </section>

          </form>


          <div className="login-picture">
            <img src={dogo} alt="nobody knows you are a dog" id="dog-meeting"></img>
            <h6>Copyright 2016 The New Yorker Image by Danny Shanahan. <br></br>All Rights Reserved.</h6>
          </div>
        </main>

      </div>
    )
  }
}
