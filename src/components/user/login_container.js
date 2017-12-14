import React, { Component } from "react";
import LoginForm from "./login_form";
import Navbar from "./navbar";

class LoginContainer extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <LoginForm />
      </div>
    );
  }
}

export default LoginContainer;
