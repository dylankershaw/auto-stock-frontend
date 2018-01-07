import React from "react";
import { Link } from "react-router-dom";

const UserNavbar = ({ currentContainer }) => {
  if (currentContainer === "login") {
    return (
      <div>
        <strong>LOG IN</strong> | <Link to="/signup">SIGN UP</Link>
      </div>
    );
  } else if (currentContainer === "signup") {
    return (
      <div>
        <Link to="/login">LOG IN</Link> | <strong>SIGN UP</strong>
      </div>
    );
  }
};

export default UserNavbar;
