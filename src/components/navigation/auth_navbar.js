import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logoutUser } from "../../actions";

class AuthNavbar extends Component {
  render() {
    // renders if there is a logged in user
    if (Object.keys(this.props.user).length) {
      return (
        <div>
          <div>Welcome {this.props.user.username}</div>
          <a onClick={this.props.logoutUser}>Log Out</a>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/login">Log In</Link> or <Link to="/signup">Sign Up</Link>
        </div>
      );
    }
  }
}

function mapStateToprops({ user }) {
  return { user };
}

export default connect(mapStateToprops, { logoutUser })(AuthNavbar);
