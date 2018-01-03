import React from "react";
import { Button } from "semantic-ui-react";

const ChartToggle = ({ toggleChartType, selection }) => (
  <div>
    <Button.Group>
      <Button
        color="black"
        basic={selection !== "bar" ? true : false}
        onClick={() => {
          toggleChartType("bar");
        }}
      >
        BAR
      </Button>
      <Button.Or />
      <Button
        color="black"
        basic={selection !== "radar" ? true : false}
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
