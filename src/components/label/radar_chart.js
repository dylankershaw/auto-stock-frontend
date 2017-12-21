import { Radar } from "react-chartjs-2";
import React from "react";

const RadarChart = ({ labels, findScore }) => {
  const labelNames = labels.map(label => label.name);
  const labelValues = labels.map(label => findScore(label));

  return (
    <Radar data={{ labels: labelNames, datasets: [{ data: labelValues }] }} />
  );
};

export default RadarChart;
