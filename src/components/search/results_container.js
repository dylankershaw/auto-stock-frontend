import { connect } from "react-redux";
import React from "react";

import ResultShow from "./result_show";

const ResultsContainer = ({ results }) => (
  <div>
    {results.map(result => <ResultShow key={result.id} result={result} />)}
  </div>
);

function mapStateToProps({ search }) {
  return { results: search.results };
}

export default connect(mapStateToProps)(ResultsContainer);
