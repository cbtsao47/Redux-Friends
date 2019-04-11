import React from "react";

class Login extends React.Component {
  render() {
    return (
      <form action="">
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
      </form>
    );
  }
}
export default Login;
