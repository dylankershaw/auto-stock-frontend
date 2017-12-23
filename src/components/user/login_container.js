import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

import UserNavbar from "../navigation/user_navbar";
import LoginForm from "./login_form";

class LoginContainer extends Component {
  render() {
    return (
      <Grid textAlign="center">
        <Grid.Row columns={3}>
          <Grid.Column>
            <Link to="/">{"< BACK TO SEARCH"}</Link>
          </Grid.Column>
          <Grid.Column>
            <UserNavbar currentContainer="login" />
          </Grid.Column>
          <Grid.Column />
        </Grid.Row>
        <Grid.Row columns={3}>
          <Grid.Column />
          <Grid.Column>
            <LoginForm />
          </Grid.Column>
          <Grid.Column />
        </Grid.Row>
      </Grid>
    );
  }
}

export default LoginContainer;
