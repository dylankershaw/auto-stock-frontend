import React from "react";

import AuthNavbar from "../navigation/auth_navbar";
import ImageShow from "./image_show";

const UploadComplete = ({ image }) => {
  return (
    <div>
      <AuthNavbar />
      UPLOAD COMPLETE
      <ImageShow />
    </div>
  );
};

export default UploadComplete;
