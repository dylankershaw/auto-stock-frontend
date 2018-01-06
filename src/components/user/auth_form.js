import { Button, Form, Message } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";
import { connect } from "react-redux";

import { loginUser, signupUser, clearErrors } from "../../actions";

class AuthForm extends Component {
  renderField({ input, label, type, meta: { touched, error } }) {
    return (
      <div>
        <label>{label}</label>
        <input type={type} {...input} />
        <div>{touched ? error : ""}</div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.currentContainer === "login"
      ? this.props.loginUser(values)
      : this.props.signupUser(values);
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
            type="text"
          />
          <br />
          <Field
            label="Password"
            name="password"
            component={this.renderField}
            type="password"
          />
          <br />
          <Button type="submit">
            {this.props.currentContainer === "login" ? "Log In" : "Sign Up"}
          </Button>
        </Form>
        {this.props.errors.login ? (
          <Message>Invalid username or password.</Message>
        ) : null}
        {this.props.errors.signup ? (
          <Message>Username already taken.</Message>
        ) : null}
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentContainer !== this.props.currentContainer) {
      this.props.clearErrors();
    }
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
  form: "AuthForm"
})(connect(mapStateToProps, { loginUser, signupUser, clearErrors })(AuthForm));
