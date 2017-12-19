import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import ResultsContainer from "./results_container";
import SearchBar from "./search_bar";
import Navbar from "../navbar";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SearchBar />
        {/* renders ResultsContainer if a search returns results */}
        {!_.isEmpty(this.props.results) ? (
          <ResultsContainer results={this.props.results} />
        ) : null}
      </div>
    );
  }
}

function mapStateToProps({ search }) {
  return { results: search.results };
}

export default connect(mapStateToProps)(Homepage);
