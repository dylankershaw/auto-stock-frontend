import { Button, Form } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";
import { connect } from "react-redux";
import Dropzone from "react-dropzone";

import { uploadImageFile } from "../../actions";

const FILE_FIELD_NAME = "files";

const renderDropzoneInput = field => {
  const files = field.input.value;
  return (
    <div>
      <Dropzone
        name={field.name}
        onDrop={(filesToUpload, e) => field.input.onChange(filesToUpload)}
      >
        <div>Drop a file here.</div>
      </Dropzone>
      {field.meta.touched &&
        field.meta.error && <span className="error">{field.meta.error}</span>}
      {files &&
        Array.isArray(files) && (
          <ul>{files.map((file, i) => <li key={i}>{file.name}</li>)}</ul>
        )}
    </div>
  );
};

class UploadFileForm extends Component {
  onSubmit(data) {
    //// NEED TO PASS IN USER ID
    this.props.uploadImageFile(data);
  }

  render() {
    const { handleSubmit, reset } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <label htmlFor={FILE_FIELD_NAME}>Files</label>
          <Field name={FILE_FIELD_NAME} component={renderDropzoneInput} />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button onClick={reset}>Clear Values</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "UploadFileForm" // name of form, must be unique
})(connect(null, { uploadImageFile })(UploadFileForm));
