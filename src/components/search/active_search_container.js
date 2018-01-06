import { connect } from "react-redux";
import React from "react";

import SearchNavbar from "../navigation/search_navbar";
import ResultsContainer from "./results_container";
import { submitSearch } from "../../actions";

class ActiveSearchContainer extends React.Component {
  // renders results when user manually inputs url
  componentDidMount() {
    const searchTerm = this.props.match.params.searchTerm;
    this.props.submitSearch(searchTerm);
  }

  render() {
    return (
      <div>
        <SearchNavbar />
        <ResultsContainer searchTerm={this.props.match.params.searchTerm} />
      </div>
    );
  }
}

function mapStateToProps({ search }) {
  return { results: search.results };
}

export default connect(mapStateToProps, { submitSearch })(
  ActiveSearchContainer
);
