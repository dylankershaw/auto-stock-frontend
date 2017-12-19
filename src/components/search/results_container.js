import React from "react";
import ResultShow from "./result_show";

const ResultsContainer = ({ results }) => (
  <div>
    {console.log(results)}
    {results.map(result => <ResultShow key={result.id} result={result} />)}
  </div>
);

export default ResultsContainer;
