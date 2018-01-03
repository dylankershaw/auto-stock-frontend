import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

import UserNavbar from "../navigation/user_navbar";
import SignupForm from "./signup_form";
import LoginForm from "./login_form";

const AuthContainer = ({ currentContainer }) => {
  return (
    <Grid textAlign="center" style={{ margin: "20px" }}>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Link to="/">{"< BACK TO SEARCH"}</Link>
        </Grid.Column>
        <Grid.Column>
          <UserNavbar currentContainer={currentContainer} />
        </Grid.Column>
        <Grid.Column />
      </Grid.Row>
      <Grid.Row columns={3}>
        <Grid.Column />
        <Grid.Column>
          {currentContainer === "login" ? <LoginForm /> : <SignupForm />}
        </Grid.Column>
        <Grid.Column />
      </Grid.Row>
    </Grid>
  );
};

export default AuthContainer;
