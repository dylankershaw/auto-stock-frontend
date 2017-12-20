import { connect } from "react-redux";
import React from "react";

import ResultShow from "./result_show";

const ResultsContainer = ({ results }) => (
  <div>
    {results.length > 0 ? (
      results.map(result => <ResultShow key={result.id} result={result} />)
    ) : (
      <div>
        <br />No results found. Try another keyword.
      </div>
    )}
  </div>
);

function mapStateToProps({ search }) {
  return { results: search.results };
}

export default connect(mapStateToProps)(ResultsContainer);
