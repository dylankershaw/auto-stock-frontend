import { Grid, Divider, Dimmer, Loader } from "semantic-ui-react";
import { connect } from "react-redux";
import React from "react";

import UploadNavbar from "../navigation/upload_navbar";
import UploadFileForm from "./upload_file_form";
import UploadURLForm from "./upload_url_form";

const PreUpload = ({ loading }) => {
  return (
    <Dimmer.Dimmable as={Grid} textAlign="center" className="thinMargin">
      <Dimmer active={loading}>
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
};

function mapStateToProps({ loading }) {
  return { loading };
}

export default connect(mapStateToProps)(PreUpload);
