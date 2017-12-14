import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";
import { searchTerm } from "../actions";
import { connect } from "react-redux";

class Homepage extends Component {
  // returns jsx for fields
  renderField(field) {
    return (
      <div>
        <input type="text" {...field.input} />
      </div>
    );
  }

  onSubmit(values) {
    this.props.searchTerm(values);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
        <Field name="searchTerm" component={this.renderField} />
      </form>
    );
  }
}

export default reduxForm({
  form: "SearchForm" // name of form, must be unique
})(connect(null, { searchTerm })(Homepage));
