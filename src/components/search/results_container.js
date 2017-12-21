import React, { Component } from "react";
import { connect } from "react-redux";

import { clearResults } from "../../actions/index";
import ResultShow from "./result_show";

class ResultsContainer extends Component {
  render() {
    return (
      <div>
        Results for <strong>{this.props.searchTerm}</strong>
        {this.props.results.length > 0 ? (
          this.props.results
            .sort((a, b) => {
              return b.score - a.score;
            })
            .map(result => <ResultShow key={result.id} result={result} />)
        ) : (
          <div>
            <br />No results found. Try another keyword.
          </div>
        )}
      </div>
    );
  }

  componentWillUnmount() {
    this.props.clearResults();
  }
}

function mapStateToProps({ search }) {
  return { results: search.results };
}

export default connect(mapStateToProps, { clearResults })(ResultsContainer);
