import React from "react";

const Label = ({ name, score }) => {
  console.log(name, score);
  return (
    <div>
      {name}: {Math.round(score * 100)}
    </div>
  );
};

export default Label;
