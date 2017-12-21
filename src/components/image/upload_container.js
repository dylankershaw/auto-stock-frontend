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

function mapStateToProps({ image }) {
  return { image };
}

export default connect(mapStateToProps, { clearImage })(UploadContainer);
