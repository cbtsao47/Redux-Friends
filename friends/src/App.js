import React, { Component } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Login from "./components/Login";
import FriendsListView from "./views/FriendsListView";
class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/login">Log In</Link>
          <Link to="/friends">Friends</Link>
        </nav>
        <Route path="/login" component={Login} />
        <Route path="/friends" component={FriendsListView} />
      </div>
    );
  }
}

export default App;
