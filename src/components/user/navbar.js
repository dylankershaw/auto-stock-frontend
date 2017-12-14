import React, { Component } from "react";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    return <div>welcome {this.props.user.username}</div>;
  }
}

function mapStateToprops({ user }) {
  return { user };
}

export default connect(mapStateToprops)(Navbar);
