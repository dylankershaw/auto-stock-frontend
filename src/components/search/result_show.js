import React from "react";

const ResultShow = ({ result }) => (
  <div>
    <img alt="" src={result.url} width="250" />
    {Math.round(result.score * 100)}
  </div>
);

export default ResultShow;
