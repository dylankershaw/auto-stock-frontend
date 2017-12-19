import React, { Component } from "react";

import ResultsContainer from "./results_container";
import SearchBar from "./search_bar";
import Navbar from "../navbar";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SearchBar />
        {<ResultsContainer />} {/* render if !results.empty?} */}
      </div>
    );
  }
}

export default Homepage;
