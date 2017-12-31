import { Button, Form, Icon, Input } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router";
import React, { Component } from "react";
import { connect } from "react-redux";

import { submitSearch } from "../../actions";

class SearchBar extends Component {
  constructor() {
    super();

    this.state = { placeholder: "" };
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
      placeholder += terms[termIndex][letterIndex];

      // changes direction if placeholder is entire term
      placeholder.length === terms[termIndex].length
        ? (direction = "decreasing")
        : letterIndex++;
    };

    // removes last letter from placeholder
    const removeLetter = () => {
      placeholder = placeholder.slice(0, letterIndex);

      // changes direction if placeholder is empty
      placeholder.length === 0 ? (direction = "increasing") : letterIndex--;
    };

    setInterval(() => {
      direction === "increasing" ? addLetter() : removeLetter();

      this.setState({ placeholder });

      // cycles through terms
      if (placeholder.length === 0) {
        termIndex === terms.length - 1 ? (termIndex = 0) : termIndex++;
      }
    }, 250);
  }

  onSubmit(values) {
    this.props.history.push(`/search/${values.searchTerm}`);
    this.props.submitSearch(values.searchTerm);
  }

  render() {
    const renderField = field => {
      return (
        <div>
          <Input
            style={this.isOnRoot() ? { color: "white" } : null}
            transparent={this.isOnRoot() ? true : false}
            placeholder={
              this.isOnRoot() ? this.state.placeholder : "enter a search term"
            }
            icon="search"
            iconPosition="left"
            type="text"
            size="massive"
            {...field.input}
          />
        </div>
      );
    };

    return (
      <Form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
        <Field color="red" name="searchTerm" component={renderField} />
      </Form>
    );
  }
}

function mapStateToProps({ search }) {
  return { results: search.results };
}

export default reduxForm({
  form: "SearchForm"
})(withRouter(connect(mapStateToProps, { submitSearch })(SearchBar)));
