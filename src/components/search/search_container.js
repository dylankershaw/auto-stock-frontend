import { connect } from "react-redux";
import React from "react";
import _ from "lodash";

import SearchNavbar from "../navigation/search_navbar";
import ResultsContainer from "./results_container";
import { submitSearch } from "../../actions";

class SearchContainer extends React.Component {
  // renders results when user manually inputs url
  componentDidMount() {
    const searchTerm = this.props.match.params.searchTerm;
    this.props.submitSearch(searchTerm);
  }

  render() {
    if (_.isEmpty(this.props.results)) {
      return (
        <div>
          <SearchNavbar />
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
