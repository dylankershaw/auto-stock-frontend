import React from "react";
import ResultShow from "./result_show";

const ResultsContainer = ({ results }) => (
  <div>
    {results.map(result => <ResultShow key={result.id} result={result} />)}
  </div>
);

export default ResultsContainer;
