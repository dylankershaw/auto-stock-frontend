import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserNavbar extends Component {
  render() {
    if (this.props.currentContainer === "login") {
      return (
        <div>
          <strong>LOG IN</strong> | <Link to="/signup">SIGN UP</Link>
        </div>
      );
    } else if (this.props.currentContainer === "signup") {
      return (
        <div>
          <Link to="/login">LOG IN</Link> | <strong>SIGN UP</strong>
        </div>
      );
    }
  }
}

export default UserNavbar;
