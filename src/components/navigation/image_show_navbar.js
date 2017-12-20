import { Link } from "react-router-dom";
import React from "react";

const ImageShowNavbar = () => (
  <div>
    <Link to="/">{"< BACK TO SEARCH"}</Link>
    <br />
    <Link to="/upload">{"< UPLOAD AN IMAGE"}</Link>
  </div>
);

export default ImageShowNavbar;
