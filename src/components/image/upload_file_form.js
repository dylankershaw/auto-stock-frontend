import ReactFileReader from "react-file-reader";
import { Button } from "semantic-ui-react";
import React, { Component } from "react";
import { connect } from "react-redux";

import { uploadImageFile } from "../../actions";

class UploadFileForm extends Component {
  handleImage = image => {
    // passes in only the first file (if there are multiple)
    this.props.uploadImageFile(image, this.props.user.id);
  };

  render() {
    return (
      <ReactFileReader
        handleFiles={this.handleImage}
        fileTypes={[".jpg", ".jpeg", ".png", "gif"]}
        base64={true}
        multipleFiles={false}
      >
        <Button className="btn">Upload</Button>
      </ReactFileReader>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps, { uploadImageFile })(UploadFileForm);
