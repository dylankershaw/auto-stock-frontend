import React from "react";
import BarLabel from "./bar_label";

const BarList = ({ labels, findScore }) => {
  return (
    <div>
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