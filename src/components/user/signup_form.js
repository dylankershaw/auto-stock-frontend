import { Button, Form } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";
import { connect } from "react-redux";

import { signupUser } from "../../actions";

class SignupForm extends Component {
  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input type="text" {...field.input} />
      </div>
    );
  }

  onSubmit(values) {
    this.props.signupUser(values);
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

export default reduxForm({
  form: "SignupForm" // name of form, must be unique
})(connect(null, { signupUser })(SignupForm));
