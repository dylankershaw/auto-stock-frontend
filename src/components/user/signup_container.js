import React, { Component } from "react";
import SignupForm from "./signup_form";
import UserNavbar from "./user_navbar";

class SignupContainer extends Component {
  render() {
    return (
      <div>
        <UserNavbar currentContainer="signup" />
        <SignupForm />
      </div>
    );
  }
}

export default SignupContainer;
