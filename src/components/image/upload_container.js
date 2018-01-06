import { Grid, Divider, Dimmer, Loader } from "semantic-ui-react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";

import UploadNavbar from "../navigation/upload_navbar";
import AuthNavbar from "../navigation/auth_navbar";
import { clearImage } from "../../actions/index";
import UploadFileForm from "./upload_file_form";
import UploadComplete from "./upload_complete";
import UploadURLForm from "./upload_url_form";
import blackLogo from "../../blackLogo.png";

class UploadContainer extends Component {
  render() {
    if (_.isEmpty(this.props.image)) {
      return (
        <Dimmer.Dimmable
          as={Grid}
          textAlign="center"
          style={{ margin: "20px" }}
        >
          <Dimmer active={this.props.loading}>
            <Loader>Uploading...</Loader>
          </Dimmer>
          <UploadNavbar />
          <Grid.Row columns={3}>
            <Grid.Column />
            <Grid.Column>
              <UploadURLForm />
            </Grid.Column>
            <Grid.Column />
          </Grid.Row>
          <Divider horizontal>Or</Divider>
          <Grid.Row columns={3}>
            <Grid.Column />
            <Grid.Column>
              <UploadFileForm />
            </Grid.Column>
            <Grid.Column />
          </Grid.Row>
        </Dimmer.Dimmable>
      );
    } else {
      return (
        <Grid style={{ margin: "20px" }}>
          <Grid.Row columns={3}>
            <Grid.Column>
              {" "}
              <a onClick={this.props.clearImage}>{"< UPLOAD ANOTHER IMAGE"}</a>
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
    }
  }

  componentWillUnmount() {
    this.props.clearImage();
  }
}

function mapStateToProps({ image, loading }) {
  return { image, loading };
}

export default connect(mapStateToProps, { clearImage })(UploadContainer);
