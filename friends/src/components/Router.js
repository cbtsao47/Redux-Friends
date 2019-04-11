import React from "react";
import { Route, Link } from "react-router-dom";
import Login from "./Login";
import FriendsListView from "../views/FriendsListView";
const Router = props => {
  return (
    <>
      <Route path="/login" component={Login} />
      <Route path="/friends" component={FriendsListView} />
    </>
  );
};
export default Router;
