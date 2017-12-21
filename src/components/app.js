import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { authenticateToken } from "../actions";
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import ImageShowContainer from "./image/image_show_container";
import UserShowContainer from "./user/user_show_container";
import SearchContainer from "./search/search_container";
import UploadContainer from "./image/upload_container";
import SignupContainer from "./user/signup_container";
import SearchNavbar from "./navigation/search_navbar";
import LoginContainer from "./user/login_container";

class App extends Component {
  // checks localStorage token to set user if applicable
  componentDidMount() {
    const token = localStorage.getItem("token");
    // attempts authentication if there is a token
    token.length ? this.props.authenticateToken(token) : null;
  }

  loggedIn = () => {
    return !_.isEmpty(this.props.user);
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={SearchNavbar} />
            <Route
              path="/login"
              render={() =>
                this.loggedIn() ? <Redirect to="/" /> : <LoginContainer />
              }
            />
            <Route
              path="/signup"
              render={() =>
                this.loggedIn() ? <Redirect to="/" /> : <SignupContainer />
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
            <Route path="/search/:searchTerm" component={SearchContainer} />
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
