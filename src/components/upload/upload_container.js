import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { clearImage } from "../../actions/index";
import PostUpload from "./post_upload";
import PreUpload from "./pre_upload";

class UploadContainer extends Component {
  render() {
    if (_.isEmpty(this.props.image)) {
      return <PreUpload />;
    } else {
      return <PostUpload />;
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
