import { Button, Form, Icon, Input } from "semantic-ui-react";
import { withRouter } from "react-router";
import React, { Component } from "react";
import { connect } from "react-redux";

import { submitSearch } from "../../actions";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { placeholder: "", searchTerm: "", touched: false };
  }

  isOnRoot = () => {
    return this.props.history.location.pathname === "/";
  };

  // animates placeholder values with sample search terms
  componentDidMount() {
    const terms = ["dogs", "space", "mountains"];
    let termIndex = 0;
    let letterIndex = 0;
    let placeholder = "";
    let direction = "increasing";

    // adds next term letter to placeholder
    const addLetter = () => {
      // removes pipe from placeholder and adds if after next letter
      placeholder =
        placeholder.slice(0, -1) + terms[termIndex][letterIndex] + "|";

      // changes direction if placeholder is entire term
      placeholder.length === terms[termIndex].length + 1
        ? (direction = "decreasing")
        : letterIndex++;
    };

    // removes last letter from placeholder
    const removeLetter = () => {
      placeholder = placeholder.slice(0, letterIndex) + "|";

      // changes direction when done with a term and cycles through terms
      if (placeholder.length === 1) {
        direction = "increasing";
        termIndex === terms.length - 1 ? (termIndex = 0) : termIndex++;
      } else {
        letterIndex--;
      }
    };

    const animatePlacholder = setInterval(() => {
      direction === "increasing" ? addLetter() : removeLetter();

      // stops animation when field is touched
      !this.state.touched ? this.setState({ placeholder }) : stopAnimation();
    }, 250);

    const stopAnimation = () => {
      clearInterval(animatePlacholder);
      this.setState({ placeholder: "" });
    };
  }

  handleClick = () => {
    this.setState({ touched: true });
  };

  handleChange = ev => {
    this.setState({ searchTerm: ev.target.value });
  };

  handleSubmit = () => {
    this.props.history.push(`/search/${this.state.searchTerm}`);
    this.props.submitSearch(this.state.searchTerm);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          onClick={this.handleClick}
          value={this.state.value}
          onChange={this.handleChange}
          style={this.isOnRoot() ? { color: "white" } : null}
          transparent={this.isOnRoot() ? true : false}
          placeholder={
            this.isOnRoot() ? this.state.placeholder : "enter a search term"
          }
          icon="search"
          iconPosition="left"
          type="text"
          size="massive"
        />
      </Form>
    );
  }
}

export default withRouter(connect(null, { submitSearch })(SearchBar));
