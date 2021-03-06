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

  // opens delete confirmation box
  handleClick = () => this.setState({ open: true });

  // triggers delete image action creator and redirects to root
  handleConfirm = () => {
    this.setState({ open: false });
    this.props.deleteImage(this.props.imageId);
    this.props.history.push("/");
  };

  // closes delete confirmation box
  handleCancel = () => this.setState({ open: false });

  render() {
    return (
      <div className="deleteButton">
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
