import { Button, Form } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";
import { searchTerm } from "../../actions";
import { connect } from "react-redux";

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
    this.props.searchTerm(values.searchTerm);
  }

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
        <Field name="searchTerm" component={this.renderField} />
        <Button type="submit">Submit Search</Button>
      </Form>
    );
  }
}

export default reduxForm({
  form: "SearchForm" // name of form, must be unique
})(connect(null, { searchTerm })(SearchBar));
