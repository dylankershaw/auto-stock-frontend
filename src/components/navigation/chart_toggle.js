import React from "react";
import { Button } from "semantic-ui-react";

const ChartToggle = ({ toggleChartType }) => (
  <div>
    <div>chart type:</div>
    <Button.Group>
      <Button
        onClick={() => {
          toggleChartType("bar");
        }}
      >
        BAR
      </Button>
      <Button.Or />
      <Button
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
