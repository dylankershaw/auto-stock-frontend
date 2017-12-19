import React from "react";
import Label from "../label.js";

const ResultShow = ({ result }) => (
  <div>
    <img alt="" src={result.url} width="250" />
    <Label score={result.score} />
  </div>
);

export default ResultShow;
