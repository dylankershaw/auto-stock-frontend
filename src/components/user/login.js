import { Button, Form } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";
import { loginUser } from "../../actions";
import { connect } from "react-redux";
import Navbar from "./navbar";

class Login extends Component {
  // returns jsx for fields
  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input type="text" {...field.input} />
      </div>
    );
  }

  onSubmit(values) {
    this.props.loginUser(values);
  }

  render() {
    return (
      <div>
        <Navbar />
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
      </div>
    );
  }
}

export default reduxForm({
  form: "LoginForm" // name of form, must be unique
})(connect(null, { loginUser })(Login));
