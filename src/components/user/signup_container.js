import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

import UserNavbar from "../navigation/user_navbar";
import SignupForm from "./signup_form";

class SignupContainer extends Component {
  render() {
    return (
      <Grid textAlign="center">
        <Grid.Row columns={3}>
          <Grid.Column>
            <Link to="/">{"< BACK TO SEARCH"}</Link>
          </Grid.Column>
          <Grid.Column>
            <UserNavbar currentContainer="signup" />
          </Grid.Column>
          <Grid.Column />
        </Grid.Row>
        <Grid.Row columns={3}>
          <Grid.Column />
          <Grid.Column>
            <SignupForm />
          </Grid.Column>
          <Grid.Column />
        </Grid.Row>
      </Grid>
    );
  }
}

export default SignupContainer;
