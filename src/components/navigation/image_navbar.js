import { withRouter } from "react-router";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class ImageNavbar extends Component {
  // sets text color as white if on root
  textColor = this.props.history.location.pathname === "/"
    ? { color: "white" }
    : null;

  render() {
    if (this.props.currentContainer === "search") {
      return (
        <div style={this.textColor}>
          <strong>SEARCH</strong> |{" "}
          <Link style={this.textColor} to="/upload">
            UPLOAD
          </Link>
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

export default withRouter(ImageNavbar);
