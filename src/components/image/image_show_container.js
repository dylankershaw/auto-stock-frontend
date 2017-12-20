import { connect } from "react-redux";
import React from "react";
import _ from "lodash";

import ImageShowNavbar from "../navigation/image_show_navbar";
import { showImage } from "../../actions/index";
import ImageShow from "./image_show";

class ImageShowContainer extends React.Component {
  componentDidMount() {
    console.log("imageshowcontainer props:", this.props.match.params.id); //// USE INSTEAD OF location; make INTEGER
    const imageId = this.props.location.pathname.split("/images/")[1];
    this.props.showImage(imageId);
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

export default connect(mapStateToProps, { showImage })(ImageShowContainer);
