import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";

import { clearImage } from "../../actions/index";

const ImageShowNavbar = ({ clearImage }) => (
  <div>
    <Link to="/">{"< BACK TO SEARCH"}</Link>
    <br />
    <Link to="/upload" onClick={clearImage}>
      {"< UPLOAD AN IMAGE"}
    </Link>
  </div>
);

export default connect(null, { clearImage })(ImageShowNavbar);
