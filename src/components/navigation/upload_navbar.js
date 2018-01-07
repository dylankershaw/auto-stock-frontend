import React from "react";
import { Grid } from "semantic-ui-react";

import blackLogo from "../../logos/blackLogo.png";
import ImageNavbar from "./image_navbar";
import AuthNavbar from "./auth_navbar";

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
