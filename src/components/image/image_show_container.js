import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import React from "react";
import _ from "lodash";

import ImageShowNavbar from "../navigation/image_show_navbar";
import AuthNavbar from "../navigation/auth_navbar";
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
        <Grid container>
          <Grid.Row>
            <Grid.Column floated="left">
              <ImageShowNavbar />
            </Grid.Column>
            <Grid.Column floated="right">
              <AuthNavbar />
            </Grid.Column>
          </Grid.Row>
          Loading Image...
        </Grid>
      );
    } else {
      return (
        <Grid container>
          <Grid.Row centered columns={3}>
            <Grid.Column>
              <ImageShowNavbar />
            </Grid.Column>
            <Grid.Column />
            <Grid.Column>
              <AuthNavbar />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column>
              <ImageShow />
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
