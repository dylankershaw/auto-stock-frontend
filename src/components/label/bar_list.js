import React from "react";
import BarLabel from "./bar_label";

// renders BarLabel for each label
const BarList = ({ labels, findScore }) => {
  return (
    <div style={{ maxWidth: "80%" }}>
      {labels.map(label => {
        return (
          <div key={label.id}>
            <BarLabel
              score={findScore(label)}
              name={label.name}
              id={label.id}
            />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default BarList;
