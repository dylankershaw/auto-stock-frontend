import React, { Component } from "react";
import { Link } from "react-router-dom";

import UserNavbar from "../navigation/user_navbar";
import LoginForm from "./login_form";

class LoginContainer extends Component {
  render() {
    return (
      <div>
        <Link to="/">{"< BACK TO SEARCH"}</Link>
        <br />
        <br />
        <UserNavbar currentContainer="login" />
        <LoginForm />
      </div>
    );
  }
}

export default LoginContainer;
