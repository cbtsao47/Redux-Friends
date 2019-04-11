import React from "react";
import { connect } from "react-redux";
import { login } from "../actions/index";
class Login extends React.Component {
  state = {
    creds: {
      username: "",
      password: ""
    }
  };
  handleChange = e => {
    this.setState({
      creds: {
        ...this.state.creds,
        [e.target.name]: e.target.value
      }
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props
      .login(this.state.creds)
      .then(() => this.props.history.push("/friends"));
  };
  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={this.handleChange}
          value={this.state.username}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={this.handleChange}
          value={this.state.password}
        />
        <button>Log In</button>
      </form>
    );
  }
}
export default connect(
  null,
  { login }
)(Login);
