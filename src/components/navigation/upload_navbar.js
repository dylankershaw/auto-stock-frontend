import React from "react";
import { Grid } from "semantic-ui-react";

import ImageNavbar from "./image_navbar";
import AuthNavbar from "./auth_navbar";
import blackLogo from "../../blackLogo.png";

const UploadNavbar = () => {
  return (
    <Grid.Row columns={3}>
      <Grid.Column>
        <ImageNavbar currentContainer="upload" />
      </Grid.Column>
      <Grid.Column>
        <img alt="tagless logo" src={blackLogo} height="100px" />
      </Grid.Column>
      <Grid.Column>
        <AuthNavbar />
      </Grid.Column>
    </Grid.Row>
  );
};

export default UploadNavbar;
