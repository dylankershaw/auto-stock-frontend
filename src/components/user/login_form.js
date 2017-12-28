import { Button, Form, Message } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";
import { connect } from "react-redux";

import { loginUser } from "../../actions";

class LoginForm extends Component {
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
    this.props.loginUser(values);
    this.props.reset();
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Username"
            name="username"
            component={this.renderField}
          />
          <Field
            label="Password"
            name="password"
            component={this.renderField}
          />
          <Button type="submit">Log In</Button>
        </Form>
        {this.props.errors.login ? (
          <Message>Invalid username or password.</Message>
        ) : null}
      </div>
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

function mapStateToProps({ errors }) {
  return { errors };
}

export default reduxForm({
  validate,
  form: "LoginForm"
})(connect(mapStateToProps, { loginUser })(LoginForm));
