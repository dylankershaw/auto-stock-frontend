import React, { Component } from "react";
import ReactFileReader from "react-file-reader";

class TestUploader extends Component {
  handleFiles = files => {
    console.log(files);
  };
  render() {
    return (
      <div>
        <ReactFileReader handleFiles={this.handleFiles}>
          <button className="btn">Upload</button>
        </ReactFileReader>
      </div>
    );
  }
}

export default TestUploader;
