import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import UploadFileForm from "./upload_file_form";
import UploadComplete from "./upload_complete";
import UploadURLForm from "./upload_url_form";
import Navbar from "../navbar";

class UploadContainer extends Component {
  render() {
    if (_.isEmpty(this.props.image)) {
      return (
        <div>
          <Navbar />
          {/* <UploadURLForm /> */}
          <UploadFileForm />
        </div>
      );
    } else {
      return (
        <div>
          <Navbar />
          <UploadComplete image={this.props.image} />
        </div>
      );
    }
  }
}

function mapStateToProps({ image }) {
  return { image };
}

export default connect(mapStateToProps)(UploadContainer);
