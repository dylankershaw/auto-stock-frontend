import { Link } from "react-router-dom";
import React from "react";

const UserShowNavbar = () => (
  <div>
    <Link to="/">{"< SEARCH ALL IMAGES"}</Link>
    <br />
    <Link to="/upload">{"< UPLOAD AN IMAGE"}</Link>
  </div>
);

export default UserShowNavbar;
