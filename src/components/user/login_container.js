import React, { Component } from "react";
import LoginForm from "./login_form";
import UserNavbar from "./user_navbar";

class LoginContainer extends Component {
  render() {
    return (
      <div>
        <UserNavbar currentContainer="login" />
        <LoginForm />
      </div>
    );
  }
}

export default LoginContainer;
