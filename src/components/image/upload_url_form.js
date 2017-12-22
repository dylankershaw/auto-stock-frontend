import { Button, Form } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";
import { connect } from "react-redux";

import { uploadImageUrl } from "../../actions";

class UploadURLForm extends Component {
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
    this.props.uploadImageUrl(values.url, this.props.user.id);
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
          <Field label="URL" name="url" component={this.renderField} />
          Ensure URL ends with file type.
          <br />(i.e. www.example.com/images/dog1<strong>.jpg</strong>)
          <br />
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default reduxForm({
  form: "UploadURLForm" // name of form, must be unique
})(connect(mapStateToProps, { uploadImageUrl })(UploadURLForm));
