import { Button, Confirm } from "semantic-ui-react";
import { withRouter } from "react-router";
import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteImage } from "../../actions/index";

class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleClick = () => this.setState({ open: true });

  handleConfirm = () => {
    this.setState({ open: false });
    this.props.deleteImage(this.props.imageId);
    this.props.history.push("/");
  };

  handleCancel = () => this.setState({ open: false });

  render() {
    return (
      <div style={{ position: "relative", bottom: "40px" }}>
        <Button icon="delete" onClick={this.handleClick} />
        <Confirm
          open={this.state.open}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
          content="Are you sure you want to delete this image?"
          confirmButton="DELETE"
        />
      </div>
    );
  }
}

export default withRouter(connect(null, { deleteImage })(DeleteButton));
