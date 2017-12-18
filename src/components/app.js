import { BrowserRouter, Route, Switch } from "react-router-dom";
import { authenticateToken } from "../actions";
import React, { Component } from "react";
import { connect } from "react-redux";

import UploadContainer from "./image/upload_container";
import SignupContainer from "./user/signup_container";
import LoginContainer from "./user/login_container";
import Homepage from "./search/homepage";

class App extends Component {
  // checks localStorage token on every component mount to set user if applicable
  componentDidMount() {
    const token = localStorage.getItem("token");
    //// MAYBE ONLY DO THIS IF THERE IS NOT A USER IN STORE TO PREVENT UNNECESSARY FETCHES?
    this.props.authenticateToken(token);
  }

  // is this necessary? comment out for now if not.
  // componentDidUpdate() {
  //   const token = localStorage.getItem("token");
  //   // console.log("component updated, user:", this.props.user);
  //   // console.log("token:", token);
  //   this.props.authenticateToken(token);
  // }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            {/* Switch renders the first route that matches */}
            <Route exact path="/" component={Homepage} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/signup" component={SignupContainer} />
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
