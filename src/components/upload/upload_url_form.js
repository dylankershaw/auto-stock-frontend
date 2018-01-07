import { Button, Form } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import React from "react";
import { connect } from "react-redux";

import { uploadImageUrl } from "../../actions";

const UploadURLForm = ({ uploadImageUrl, user, handleSubmit }) => {
  const renderField = field => {
    return (
      <div>
        <label>{field.label}</label>
        <input type="text" placeholder="paste a link" {...field.input} />
      </div>
    );
  };

  const onSubmit = values => {
    uploadImageUrl(values.url, user.id);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit.bind(this))}>
        <Field name="url" component={renderField} placeholder="hello" />
        <p>
          Ensure URL ends with file type.<br />
          (i.e.www.example.com/images/dog1<strong>.jpg</strong>)
        </p>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

function mapStateToProps({ user }) {
  return { user };
}

export default reduxForm({
  form: "UploadURLForm"
})(connect(mapStateToProps, { uploadImageUrl })(UploadURLForm));
