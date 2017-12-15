import React, { Component } from "react";

import UploadForm from "./upload_form";
import Navbar from "../navbar";

class UploadContainer extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <UploadForm />
      </div>
    );
  }
}

export default UploadContainer;
