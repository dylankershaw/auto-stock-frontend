import { BrowserRouter, Route, Switch } from "react-router-dom";
import { authenticateToken } from "../actions";
import Searchbar from "./search/searchbar";
import React, { Component } from "react";
import { connect } from "react-redux";
import Signup from "./user/signup";
import LoginContainer from "./user/login_container";

class App extends Component {
  // checks localStorage token on every component mount to set user if applicable
  componentDidMount() {
    const token = localStorage.getItem("token");
    // console.log("component mounted, user:", this.props.user);
    // console.log("token:", token);
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
            <Route exact path="/" component={Searchbar} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/signup" component={Signup} />
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
