import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";

import ImageNavbar from "../navigation/image_navbar";
import AuthNavbar from "../navigation/auth_navbar";
import UploadFileForm from "./upload_file_form";
import UploadComplete from "./upload_complete";
import UploadURLForm from "./upload_url_form";

class UploadContainer extends Component {
  render() {
    if (_.isEmpty(this.props.image)) {
      return (
        <div>
          <AuthNavbar />
          <ImageNavbar currentContainer="upload" />
          {/* <UploadURLForm /> */}
          <UploadFileForm />
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <Link to="/upload">UPLOAD ANOTHER IMAGE</Link>
            <br />
            <Link to="/">SEARCH IMAGES</Link>
          </div>
          <AuthNavbar />
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
