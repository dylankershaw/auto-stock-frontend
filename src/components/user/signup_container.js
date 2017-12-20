import React, { Component } from "react";
import { Link } from "react-router-dom";

import UserNavbar from "../navigation/user_navbar";
import SignupForm from "./signup_form";

class SignupContainer extends Component {
  render() {
    return (
      <div>
        <Link to="/">{"< BACK TO SEARCH"}</Link>
        <br />
        <br />
        <UserNavbar currentContainer="signup" />
        <SignupForm />
      </div>
    );
  }
}

export default SignupContainer;
