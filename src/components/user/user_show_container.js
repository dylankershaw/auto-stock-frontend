import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

import UserShowNavbar from "../navigation/user_show_navbar";
import AuthNavbar from "../navigation/auth_navbar";

class UserShowContainer extends Component {
  constructor() {
    super();

    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    const userId = this.props.match.params.id;

    // sends userId to user#show and sets state as the returned user object
    fetch(`http://localhost:3000/api/v1/users/${userId}`).then(res =>
      res.json().then(user => this.setState({ user }))
    );
  }

  render() {
    // renders if fetch has not returned a response yet
    if (_.isEmpty(this.state.user)) {
      return (
        <div>
          <AuthNavbar />
          <UserShowNavbar />
          Loading user...
        </div>
      );
      // renders if user has images
    } else if (!_.isEmpty(this.state.user.images)) {
      return (
        <div>
          <AuthNavbar />
          <UserShowNavbar />
          {this.state.user.username}'s images
          {this.state.user.images.map(image => (
            <div key={image.id}>
              <Link to={`/images/${image.id}`}>
                <img alt="" src={image.url} width="250" />
              </Link>
            </div>
          ))}
        </div>
      );
      // renders if user does not have any images
    } else {
      return <div>{this.state.user.username} has not uploaded any images.</div>;
    }
  }
}

export default UserShowContainer;
