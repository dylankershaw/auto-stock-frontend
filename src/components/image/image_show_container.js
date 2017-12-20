import { connect } from "react-redux";
import React from "react";
import _ from "lodash";

import { showImage } from "../../actions/index";
import ImageShow from "./image_show";

class ImageShowContainer extends React.Component {
  componentDidMount() {
    const imageId = this.props.location.pathname.split("/images/")[1];
    this.props.showImage(imageId);
  }

  render() {
    if (_.isEmpty(this.props.image)) {
      return <div>Loading Image...</div>;
    } else {
      return (
        <div>
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
