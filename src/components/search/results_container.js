import { Grid, Container, Statistic } from "semantic-ui-react";
import React, { Component } from "react";
import { connect } from "react-redux";

import { clearResults } from "../../actions/index";
import ResultShow from "./result_show";

class ResultsContainer extends Component {
  render() {
    return (
      <div style={{ margin: "50px" }}>
        <Statistic>
          <Statistic.Value>{this.props.results.length}</Statistic.Value>
          <Statistic.Label>results for {this.props.searchTerm}</Statistic.Label>
        </Statistic>
        <br />
        <br />
        <Grid doubling columns={5}>
          {this.props.results
            .sort((a, b) => {
              return b.score - a.score;
            })
            .map(result => <ResultShow key={result.id} result={result} />)}
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
