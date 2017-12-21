import React from "react";
import { Button } from "semantic-ui-react";

const ChartToggle = ({ toggleChartType, selection }) => (
  <div>
    <Button.Group>
      <Button
        active={selection === "bar" ? true : false}
        onClick={() => {
          toggleChartType("bar");
        }}
      >
        BAR
      </Button>
      <Button.Or />
      <Button
        active={selection === "radar" ? true : false}
        onClick={() => {
          toggleChartType("radar");
        }}
      >
        RADAR
      </Button>
    </Button.Group>
  </div>
);

export default ChartToggle;
