import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import SearchBar from "../search/search_bar";
import ImageNavbar from "./image_navbar";
import AuthNavbar from "./auth_navbar";
import whiteLogo from "../../logos/whiteLogo.png";
import blackLogo from "../../logos/blackLogo.png";

class SearchNavbar extends Component {
  isOnRoot = () => {
    return this.props.history.location.pathname === "/";
  };

  render() {
    return (
      <Grid textAlign="center">
        <Grid.Row columns={3}>
          <Grid.Column style={{ top: "50%" }}>
            <ImageNavbar currentContainer="search" isOnRoot={this.isOnRoot()} />
          </Grid.Column>
          <Grid.Column style={{ top: "20%" }}>
            <img
              alt="tagless logo"
              src={this.isOnRoot() ? whiteLogo : blackLogo}
              height="100px"
            />
          </Grid.Column>
          <Grid.Column style={{ top: "50%" }}>
            <AuthNavbar isOnRoot={this.isOnRoot()} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row />
        <Grid.Row columns={3}>
          <Grid.Column />
          <Grid.Column>
            <SearchBar />
          </Grid.Column>
          <Grid.Column />
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps({ search }) {
  return { results: search.results };
}

export default withRouter(connect(mapStateToProps)(SearchNavbar));
