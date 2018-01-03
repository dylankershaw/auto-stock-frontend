import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Statistic } from "semantic-ui-react";
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
        <div style={{ margin: "20px" }}>
          <AuthNavbar />
          <UserShowNavbar />
          Loading user...
        </div>
      );

      // renders if user has images
    } else if (!_.isEmpty(this.state.user.images)) {
      const sortedImages = this.state.user.images.sort((a, b) => {
        return b.id - a.id;
      });

      return (
        <Grid container style={{ margin: "20px" }}>
          <Grid.Row columns={3}>
            <Grid.Column>
              <UserShowNavbar />
            </Grid.Column>
            <Grid.Column />
            <Grid.Column>
              <AuthNavbar />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Statistic>
              <Statistic.Label>{this.state.user.username}'s</Statistic.Label>
              <Statistic.Value>{sortedImages.length}</Statistic.Value>
              <Statistic.Label>images</Statistic.Label>
            </Statistic>
          </Grid.Row>
          <Grid.Row>
            {sortedImages.map(image => (
              <Link key={image.id} to={`/images/${image.id}`}>
                <img
                  alt=""
                  src={image.url}
                  height="225px"
                  style={{ margin: "2px" }}
                />
              </Link>
            ))}
          </Grid.Row>
        </Grid>
      );

      // renders if user does not have any images
    } else {
      return (
        <div style={{ margin: "20px" }}>
          {this.state.user.username} has not uploaded any images.
        </div>
      );
    }
  }
}

export default UserShowContainer;
