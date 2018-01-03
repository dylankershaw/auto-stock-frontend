import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import SearchBar from "../search/search_bar";
import ImageNavbar from "./image_navbar";
import AuthNavbar from "./auth_navbar";
import whiteLogo from "../../whiteLogo.png";
import blackLogo from "../../blackLogo.png";

const UploadNavbar = () => {
  return (
    <Grid.Row columns={3}>
      <Grid.Column>
        <ImageNavbar currentContainer="upload" />
      </Grid.Column>
      <Grid.Column>
        <img src={blackLogo} height="100px" />
      </Grid.Column>
      <Grid.Column>
        <AuthNavbar />
      </Grid.Column>
    </Grid.Row>
  );
};

export default UploadNavbar;
