import ReactFileReader from "react-file-reader";
import { Button } from "semantic-ui-react";
import React from "react";
import { connect } from "react-redux";

import { uploadImageFile } from "../../actions";

const UploadFileForm = ({ uploadImageFile, user }) => {
  const handleImage = image => {
    // passes in only the first file (if user tries to upload multiple)
    uploadImageFile(image, user.id);
  };

  return (
    <ReactFileReader
      handleFiles={handleImage}
      fileTypes={[".jpg", ".jpeg", ".png", ".gif"]}
      base64={true}
      multipleFiles={false}
    >
      <Button className="btn">Upload From Computer</Button>
      <br />
      <br />
      <p>Allowable file types: JPG, PNG, GIF</p>
    </ReactFileReader>
  );
};

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps, { uploadImageFile })(UploadFileForm);
