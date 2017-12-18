import React from "react";

const Label = ({ name, score }) => {
  console.log(name, score);
  return (
    <div>
      {name}: {score}
    </div>
  );
};

export default Label;
