import { Button, Form } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";
import { connect } from "react-redux";
import Dropzone from "react-dropzone";
import ReactFileReader from "react-file-reader";

import { uploadImageFile } from "../../actions";

const FILE_FIELD_NAME = "files";

class UploadFileForm extends Component {
  handleImage = image => {
    //// NEED TO PASS IN USER ID
    // passes in only the first file (if there are multiple)
    this.props.uploadImageFile(image);
  };

  render() {
    return (
      <ReactFileReader
        handleFiles={this.handleImage}
        fileTypes={[".jpg", ".jpeg", ".png", "gif"]}
        base64={true}
        multipleFiles={false}
      >
        <button className="btn">Upload</button>
      </ReactFileReader>
    );
  }
}

export default connect(null, { uploadImageFile })(UploadFileForm);
