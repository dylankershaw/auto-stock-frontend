import { Label } from "semantic-ui-react";
import React from "react";

import ImageShow from "./image_show";

const UploadComplete = ({ image }) => {
  return (
    <div>
      <Label color="green" icon="checkmark">
        UPLOAD COMPLETE
      </Label>
      <ImageShow />
    </div>
  );
};

export default UploadComplete;
