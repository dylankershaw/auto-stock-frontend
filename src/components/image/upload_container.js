import { Grid, Divider, Dimmer, Loader } from "semantic-ui-react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";

import ImageNavbar from "../navigation/image_navbar";
import AuthNavbar from "../navigation/auth_navbar";
import { clearImage } from "../../actions/index";
import UploadFileForm from "./upload_file_form";
import UploadComplete from "./upload_complete";
import UploadURLForm from "./upload_url_form";

class UploadContainer extends Component {
  render() {
    if (_.isEmpty(this.props.image)) {
      return (
        <Dimmer.Dimmable as={Grid} textAlign="center">
          <Dimmer active={this.props.loading}>
            <Loader>Uploading...</Loader>
          </Dimmer>
          <Grid.Row columns={3}>
            <Grid.Column />
            <Grid.Column>
              <ImageNavbar currentContainer="upload" />
            </Grid.Column>
            <Grid.Column>
              <AuthNavbar />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row />
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
        <div>
          <div>
            <a onClick={this.props.clearImage}>{"< UPLOAD ANOTHER IMAGE"}</a>
            <br />
            <Link to="/">{"< SEARCH IMAGES"}</Link>
          </div>
          <AuthNavbar />
          <UploadComplete />
        </div>
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
