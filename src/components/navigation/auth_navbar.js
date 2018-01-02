import { Button } from "semantic-ui-react";
import { withRouter } from "react-router";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logoutUser } from "../../actions";

class AuthNavbar extends Component {
  // sets text color as white if on root
  textColor = this.props.isOnRoot ? { color: "white" } : null;

  render() {
    // renders if there is a logged in user
    if (Object.keys(this.props.user).length) {
      return (
        <div>
          <div style={this.textColor}>Welcome {this.props.user.username}</div>
          <a style={this.textColor} onClick={this.props.logoutUser}>
            Log Out
          </a>
        </div>
      );
    } else {
      return (
        <Button.Group
          basic={this.props.isOnRoot ? true : false}
          inverted={this.props.isOnRoot ? true : false}
        >
          <Button as={Link} to="login">
            LOG IN
          </Button>
          <Button.Or />
          <Button as={Link} to="signup">
            SIGN UP
          </Button>
        </Button.Group>
      );
    }
  }
}

function mapStateToprops({ user }) {
  return { user };
}

export default withRouter(connect(mapStateToprops, { logoutUser })(AuthNavbar));
