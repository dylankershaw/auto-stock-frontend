import React, { Component } from "react";
import { connect } from "react-redux";

import SearchBar from "../search/search_bar";
import ImageNavbar from "./image_navbar";
import AuthNavbar from "./auth_navbar";

class SearchNavbar extends Component {
  render() {
    return (
      <div>
        <AuthNavbar />
        <ImageNavbar currentContainer="search" />
        <SearchBar />
      </div>
    );
  }
}

function mapStateToProps({ search }) {
  return { results: search.results };
}

export default connect(mapStateToProps)(SearchNavbar);
