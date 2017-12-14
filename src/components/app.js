import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Searchbar from "./search/searchbar";
import Signup from "./user/signup";
import Login from "./user/login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            {/* Switch renders the first route that matches */}
            <Route exact path="/" component={Searchbar} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToprops({ user }) {
  return { user };
}

export default connect()(App);
