import { Grid, Loader } from "semantic-ui-react";
import { connect } from "react-redux";
import React from "react";
import _ from "lodash";

import ImageShowNavbar from "../navigation/image_show_navbar";
import AuthNavbar from "../navigation/auth_navbar";
import blackLogo from "../../logos/blackLogo.png";
import { clearImage } from "../../actions/index";
import { showImage } from "../../actions/index";
import ImageShow from "./image_show";

class ImageShowContainer extends React.Component {
  // adds image to store
  componentDidMount() {
    this.props.showImage(this.props.match.params.id);
  }

  // removes image from store
  componentWillUnmount() {
    this.props.clearImage();
  }

  render() {
    return (
      <Grid container className="thinMargin">
        <Grid.Row centered columns={3}>
          <Grid.Column>
            <ImageShowNavbar />
          </Grid.Column>
          <Grid.Column>
            <img alt="tagless logo" src={blackLogo} height="100px" />
          </Grid.Column>
          <Grid.Column>
            <AuthNavbar />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column>
            {_.isEmpty(this.props.image) ? (
              <Loader>Loading Image...</Loader>
            ) : (
              <ImageShow />
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps({ image }) {
  return { image };
}

export default connect(mapStateToProps, { showImage, clearImage })(
  ImageShowContainer
);
