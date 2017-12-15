import ReactFileReader from "react-file-reader";
import React, { Component } from "react";

import UploadFileForm from "./upload_file_form";
import UploadURLForm from "./upload_url_form";
import Navbar from "../navbar";

class UploadContainer extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <UploadURLForm />
        <UploadFileForm />
      </div>
    );
  }
}

export default UploadContainer;
