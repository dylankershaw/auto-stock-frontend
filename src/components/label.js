import React from "react";
import { Link } from "react-router-dom";
import { Progress } from "semantic-ui-react";

const Label = ({ score, name }) => {
  // Math.round(score * 100);
  return (
    <div style={{ width: "250px" }}>
      <Progress
        as={Link}
        to={`/search/${name}`}
        value={Math.round(score * 100)}
        progress="percent"
        precision={0}
        color="green"
        total="100"
        label={name}
      />
    </div>
  );
};

export default Label;
