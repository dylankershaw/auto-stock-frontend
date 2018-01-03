import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { authenticateToken } from "../actions";
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import InactiveSearchContainer from "./search/inactive_search_container";
import ActiveSearchContainer from "./search/active_search_container";
import ImageShowContainer from "./image/image_show_container";
import UserShowContainer from "./user/user_show_container";
import UploadContainer from "./image/upload_container";
import AuthContainer from "./user/auth_container";

class App extends Component {
  // checks localStorage token to set user if applicable
  componentDidMount() {
    const token = localStorage.getItem("token");
    // attempts authentication if there is a token
    if (token) {
      this.props.authenticateToken(token);
    }
  }

  loggedIn = () => {
    return !_.isEmpty(this.props.user);
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={InactiveSearchContainer} />
            <Route
              path="/login"
              render={() =>
                this.loggedIn() ? (
                  <Redirect to="/" />
                ) : (
                  <AuthContainer currentContainer="login" />
                )
              }
            />
            <Route
              path="/signup"
              render={() =>
                this.loggedIn() ? (
                  <Redirect to="/" />
                ) : (
                  <AuthContainer currentContainer="signup" />
                )
              }
            />
            <Route
              path="/upload"
              render={() =>
                this.loggedIn() ? <UploadContainer /> : <Redirect to="/login" />
              }
            />
            <Route path="/users/:id" component={UserShowContainer} />
            <Route path="/images/:id" component={ImageShowContainer} />
            <Route
              path="/search/:searchTerm"
              component={ActiveSearchContainer}
            />
            <Redirect from="/" to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps, { authenticateToken })(App);
