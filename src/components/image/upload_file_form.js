import { Button, Form } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";
import { connect } from "react-redux";

import { uploadImage } from "../../actions";

class UploadFileForm extends Component {
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
    this.props.uploadImage(values.url, this.props.user.id);
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
          <Field label="URL" name="url" component={this.renderField} />
          <Button type="submit">Upload</Button>
        </Form>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default reduxForm({
  form: "UploadFileForm" // name of form, must be unique
})(connect(mapStateToProps, { uploadImage })(UploadFileForm));
