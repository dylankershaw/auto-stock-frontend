import React, { Component } from "react";
import { Link } from "react-router-dom";

class ImageNavbar extends Component {
  render() {
    if (this.props.currentContainer === "search") {
      return (
        <div>
          <strong>SEARCH</strong> | <Link to="/upload">UPLOAD</Link>
        </div>
      );
    } else if (this.props.currentContainer === "upload") {
      return (
        <div>
          <Link to="/">SEARCH</Link> | <strong>UPLOAD</strong>
        </div>
      );
    }
  }
}

export default ImageNavbar;
