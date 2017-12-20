import { Button, Form } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";
import { connect } from "react-redux";

import { submitSearch } from "../../actions";

class SearchBar extends Component {
  // returns jsx for fields
  renderField(field) {
    return (
      <div>
        <input type="text" {...field.input} />
      </div>
    );
  }

  onSubmit(values) {
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

export default reduxForm({
  form: "SearchForm" // name of form, must be unique
})(connect(null, { submitSearch })(SearchBar));
