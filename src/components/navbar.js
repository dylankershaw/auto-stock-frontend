import React, { Component } from "react";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    // true if there is a logged in user
    if (Object.keys(this.props.user).length) {
      return (
        <div>
          <div>Welcome {this.props.user.username}</div>
          <div>Log Out</div>
        </div>
      );
    } else {
      return <div>log in or sign up</div>;
    }
  }
}

function mapStateToprops({ user }) {
  return { user };
}

export default connect(mapStateToprops)(Navbar);
