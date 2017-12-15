import { Button, Form } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";
import { connect } from "react-redux";
import Dropzone from "react-dropzone";
import ReactFileReader from "react-file-reader";

import { uploadImageFile } from "../../actions";

const FILE_FIELD_NAME = "files";

// const renderDropzoneInput = field => {
//   const files = field.input.value;
//   return (
//     <div>
//       {/* <Dropzone
//         name={field.name}
//         onDrop={(filesToUpload, e) => field.input.onChange(filesToUpload)}
//       >
//         <div>Drop a file here.</div>
//       </Dropzone>
//       {field.meta.touched &&
//         field.meta.error && <span className="error">{field.meta.error}</span>}
//       {files &&
//         Array.isArray(files) && (
//           <ul>{files.map((file, i) => <li key={i}>{file.name}</li>)}</ul>
//         )} */}
//     </div>
//   );
// };

class UploadFileForm extends Component {
  handleImage = image => {
    //// NEED TO PASS IN USER ID
    // passes in only the first file (if there are multiple)
    this.props.uploadImageFile(image);
  };

  render() {
    // const { handleSubmit, reset } = this.props;
    return (
      <ReactFileReader
        handleFiles={this.handleImage}
        fileTypes={[".jpg", ".jpeg", ".png"]}
        base64={true}
        multipleFiles={false}
      >
        <button className="btn">Upload</button>
      </ReactFileReader>
    );
    // <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
    //   <div>
    //     <label htmlFor={FILE_FIELD_NAME}>Files</label>
    //     <Field name={FILE_FIELD_NAME} component={renderDropzoneInput} />
    //   </div>
    //   <div>
    //     <button type="submit">Submit</button>
    //     {/* <button onClick={reset}>Clear Values</button> */}
    //   </div>
    // </form>
  }
}

// export default reduxForm({
//   form: "UploadFileForm" // name of form, must be unique
// })(connect(null, { uploadImageFile })(UploadFileForm));

export default connect(null, { uploadImageFile })(UploadFileForm);
