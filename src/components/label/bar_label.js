import React from "react";
import { Link } from "react-router-dom";
import { Progress } from "semantic-ui-react";

const BarLabel = ({ score, name }) => {
  // Math.round(score * 100);
  return (
    <div style={{ width: "250px" }}>
      <Progress
        label={name ? name : null}
        as={name ? Link : null}
        to={`/search/${name}`}
        value={Math.round(score * 100)}
        progress="percent"
        precision={0}
        total="100"
        color="green"
      />
    </div>
  );
};

export default BarLabel;
