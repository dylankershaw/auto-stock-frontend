import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { authenticateToken } from "../actions";
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import UploadContainer from "./image/upload_container";
import SignupContainer from "./user/signup_container";
import LoginContainer from "./user/login_container";
import Homepage from "./search/homepage";

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
            <Route exact path="/" component={Homepage} />
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
            <Route path="/upload" component={UploadContainer} />
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
