import React from "react";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

import UserNavbar from "../navigation/user_navbar";
import AuthForm from "./auth_form";

const AuthContainer = ({ currentContainer }) => {
  return (
    <Grid textAlign="center" className="thinMargin">
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
          <AuthForm currentContainer={currentContainer} />
        </Grid.Column>
        <Grid.Column />
      </Grid.Row>
    </Grid>
  );
};

export default AuthContainer;
