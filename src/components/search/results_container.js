import { Grid, Container } from "semantic-ui-react";
import React, { Component } from "react";
import { connect } from "react-redux";

import { clearResults } from "../../actions/index";
import ResultShow from "./result_show";

class ResultsContainer extends Component {
  render() {
    return (
      <div>
        Results for <strong>{this.props.searchTerm}</strong>
        <br />
        <br />
        <Grid doubling columns={5}>
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
        </Grid>
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
