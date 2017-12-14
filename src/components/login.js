import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions";

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
    // this.props.login(values); //// CREATE A LOGIN ACTION
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props; // handleSubmit is available b/c of reduxForm

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Username" name="username" component={this.renderField} />
        <Field label="Password" name="password" component={this.renderField} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "LoginForm" // name of form, must be unique
})(connect(null, { loginUser })(Login));
