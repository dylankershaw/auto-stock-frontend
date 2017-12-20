import { connect } from "react-redux";
import React from "react";
import _ from "lodash";

import SearchNavbar from "../navigation/search_navbar";
import ResultsContainer from "./results_container";
import { submitSearch } from "../../actions";

class SearchContainer extends React.Component {
  componentWillReceiveProps(nextProps) {
    let searchTerm = this.props.match.params.searchTerm;
    let nextSearchTerm = nextProps.match.params.searchTerm;
    // prevents infinite loop of submitSearch()s and ensures searches trigger render new results
    if (nextProps.results.length === 0 || searchTerm !== nextSearchTerm) {
      searchTerm = nextSearchTerm;
      this.props.submitSearch(searchTerm);
    }
  }

  render() {
    if (_.isEmpty(this.props.results)) {
      return (
        <div>
          <SearchNavbar />
          Loading Images...
        </div>
      );
    } else {
      return (
        <div>
          <SearchNavbar />
          <ResultsContainer />
        </div>
      );
    }
  }
}

function mapStateToProps({ search }) {
  return { results: search.results };
}

export default connect(mapStateToProps, { submitSearch })(SearchContainer);
