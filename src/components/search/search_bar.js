import { Button, Form } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

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
  }

  render() {
    console.log("PROPS!!!", this.props);
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
})(withRouter(connect(null, { submitSearch })(SearchBar)));
