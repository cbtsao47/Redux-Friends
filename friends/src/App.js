import React, { Component } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Login from "./components/Login";
import FriendsListView from "./views/FriendsListView";
import ProtectedRoute from "./components/ProtectedRoute";
import { connect } from "react-redux";
class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/login">Log In</Link>
          <Link to="/friends">Friends</Link>
        </nav>
        <Route path="/login" component={Login} />
        <ProtectedRoute
          path="/friends"
          component={FriendsListView}
          isLoggedIn={this.props.isLoggedIn}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ isLoggedIn }) => {
  return {
    isLoggedIn
  };
};
export default connect(
  mapStateToProps,
  {}
)(App);
