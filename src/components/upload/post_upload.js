import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";

import AuthNavbar from "../navigation/auth_navbar";
import blackLogo from "../../logos/blackLogo.png";
import { clearImage } from "../../actions/index";
import UploadComplete from "./upload_complete";

const PostUpload = ({ clearImage }) => {
  return (
    <Grid className="thinMargin">
      <Grid.Row columns={3}>
        <Grid.Column>
          {" "}
          <a onClick={clearImage}>{"< UPLOAD ANOTHER IMAGE"}</a>
          <br />
          <Link to="/">{"< SEARCH IMAGES"}</Link>
        </Grid.Column>
        <Grid.Column>
          <img alt="tagless logo" src={blackLogo} height="100px" />
        </Grid.Column>
        <Grid.Column>
          <AuthNavbar />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={4}>
        <Grid.Column />
        <Grid.Column width={8}>
          <UploadComplete />
        </Grid.Column>
        <Grid.Column />
      </Grid.Row>
    </Grid>
  );
};

export default connect(null, { clearImage })(PostUpload);
