import React from "react";

import Navbar from "../navbar";
import ImageShow from "./image_show";

const UploadComplete = ({ image }) => {
  return (
    <div>
      <Navbar />
      UPLOAD COMPLETE
      <ImageShow />
    </div>
  );
};

export default UploadComplete;
