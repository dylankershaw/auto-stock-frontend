import { Button, Form } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";
import { connect } from "react-redux";

import { signupUser } from "../../actions";

class SignupForm extends Component {
  renderField(field) {
    // abstracts field.meta, field.meta.touched, and field.meta.error
    const { meta: { touched, error } } = field;

    return (
      <div>
        <label>{field.label}</label>
        <input type="text" {...field.input} />
        <div>{touched ? error : ""}</div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.signupUser(values);
    this.props.reset();
  }

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Username" name="username" component={this.renderField} />
        <Field label="Password" name="password" component={this.renderField} />
        <Button type="submit">Sign Up</Button>
      </Form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.username) {
    errors.username = "Please enter a username.";
  }
  if (!values.password) {
    errors.password = "Please enter a password.";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: "SignupForm" // name of form, must be unique
})(connect(null, { signupUser })(SignupForm));
