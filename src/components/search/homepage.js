import React, { Component } from "react";
import Searchbar from "./searchbar";
import Navbar from "../navbar";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Searchbar />
      </div>
    );
  }
}

export default Homepage;
