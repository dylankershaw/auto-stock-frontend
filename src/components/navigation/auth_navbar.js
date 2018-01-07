import { Button } from "semantic-ui-react";
import { withRouter } from "react-router";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";

import { logoutUser } from "../../actions";

const AuthNavbar = ({ user, isOnRoot, logoutUser }) => {
  // sets text color as white if on root
  const textColor = isOnRoot ? { color: "white" } : null;

  // renders if there is a logged in user
  if (Object.keys(user).length) {
    return (
      <div>
        <div style={textColor}>Welcome, {_.startCase(user.username)}</div>
        <a style={textColor} onClick={logoutUser}>
          Log Out
        </a>
      </div>
    );
  } else {
    return (
      <Button.Group
        basic={isOnRoot ? true : false}
        inverted={isOnRoot ? true : false}
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
};

function mapStateToprops({ user }) {
  return { user };
}

export default withRouter(connect(mapStateToprops, { logoutUser })(AuthNavbar));
