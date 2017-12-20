import { Button, Form } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router";
import React, { Component } from "react";
import { connect } from "react-redux";

import { submitSearch } from "../../actions";

class SearchBar extends Component {
  renderField(field) {
    return (
      <div>
        <input type="text" {...field.input} />
      </div>
    );
  }

  onSubmit(values) {
    this.props.history.push(`/search/${values.searchTerm}`);
    this.props.submitSearch(values.searchTerm);
  }

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
        <Field name="searchTerm" component={this.renderField} />
        <Button type="submit">Submit</Button>
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
