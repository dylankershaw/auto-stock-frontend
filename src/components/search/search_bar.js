import { Button, Form, Icon, Input } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router";
import React, { Component } from "react";
import { connect } from "react-redux";

import { submitSearch } from "../../actions";

class SearchBar extends Component {
  onRoot = () => {
    return this.props.history.location.pathname === "/";
  };

  renderField = field => {
    return (
      <div>
        <Input
          style={this.onRoot() ? { color: "white" } : null}
          transparent={this.onRoot() ? true : false}
          placeholder={this.onRoot() ? "Search Tagless" : "enter a search term"}
          icon="search"
          iconPosition="left"
          type="text"
          size="massive"
          {...field.input}
        />
      </div>
    );
  };

  onSubmit(values) {
    this.props.history.push(`/search/${values.searchTerm}`);
    this.props.submitSearch(values.searchTerm);
  }

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
        <Field color="red" name="searchTerm" component={this.renderField} />
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
