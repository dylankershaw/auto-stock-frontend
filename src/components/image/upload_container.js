import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import UploadFileForm from "./upload_file_form";
import UploadComplete from "./upload_complete";
import UploadURLForm from "./upload_url_form";
import AuthNavbar from "../navigation/auth_navbar";

class UploadContainer extends Component {
  render() {
    if (_.isEmpty(this.props.image)) {
      return (
        <div>
          <AuthNavbar />
          {/* <UploadURLForm /> */}
          <UploadFileForm />
        </div>
      );
    } else {
      return (
        <div>
          <UploadComplete />
        </div>
      );
    }
  }
}

function mapStateToProps({ image }) {
  return { image };
}

export default connect(mapStateToProps)(UploadContainer);
