import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import ImageNavbar from "../navigation/image_navbar";
import AuthNavbar from "../navigation/auth_navbar";
import ResultsContainer from "./results_container";
import SearchBar from "./search_bar";

class Homepage extends Component {
  render() {
    return (
      <div>
        <AuthNavbar />
        <ImageNavbar currentContainer="homepage" />
        <SearchBar />
        {/* renders ResultsContainer if a search returns results w/o error */}
        {(() => {
          if (!_.isEmpty(this.props.results)) {
            if (!this.props.results.error) {
              return <ResultsContainer results={this.props.results} />;
            } else {
              return <div>No Images Found</div>;
            }
          }
        })()}
      </div>
    );
  }
}

function mapStateToProps({ search }) {
  return { results: search.results };
}

export default connect(mapStateToProps)(Homepage);
