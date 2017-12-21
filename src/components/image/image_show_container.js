import { connect } from "react-redux";
import React from "react";
import _ from "lodash";

import ImageShowNavbar from "../navigation/image_show_navbar";
import { clearImage } from "../../actions/index";
import { showImage } from "../../actions/index";
import ImageShow from "./image_show";

class ImageShowContainer extends React.Component {
  componentDidMount() {
    this.props.showImage(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearImage();
  }

  render() {
    if (_.isEmpty(this.props.image)) {
      return (
        <div>
          <ImageShowNavbar />
          Loading Image...
        </div>
      );
    } else {
      return (
        <div>
          <ImageShowNavbar />
          <ImageShow />
        </div>
      );
    }
  }
}

function mapStateToProps({ image }) {
  return { image };
}

export default connect(mapStateToProps, { showImage, clearImage })(
  ImageShowContainer
);
