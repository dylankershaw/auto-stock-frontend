import { Radar } from "react-chartjs-2";
import { Chart } from "chart.js";
import React from "react";

// renders chart.js radar chart for label relevancy scores
const RadarChart = ({ labels, findScore }) => {
  const labelNames = labels.map(label => label.name);
  const labelValues = labels.map(label => findScore(label));

  return (
    <Radar
      data={{
        labels: labelNames,
        datasets: [
          {
            data: labelValues,
            borderColor: "#1DF23A",
            pointBorderColor: "#1DF23A",
            backgroundColor: Chart.helpers
              .color("#1DF23A")
              .alpha(0.3)
              .rgbString()
          }
        ]
      }}
      options={{
        legend: { display: false },
        scale: { pointLabels: { fontSize: 14 } }
      }}
    />
  );
};

export default RadarChart;
