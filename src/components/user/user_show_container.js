import React from "react";

import UserShowNavbar from "../navigation/user_show_navbar";
import AuthNavbar from "../navigation/auth_navbar";

const UserShowContainer = () => (
  <div>
    <AuthNavbar />
    <UserShowNavbar />
  </div>
);

export default UserShowContainer;
