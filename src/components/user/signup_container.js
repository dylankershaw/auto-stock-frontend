import React, { Component } from "react";
import SignupForm from "./signup_form";

class SignupContainer extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SignupForm />
      </div>
    );
  }
}

export default SignupContainer;
