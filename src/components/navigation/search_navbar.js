import { withRouter } from "react-router";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import React from "react";

import whiteLogo from "../../logos/whiteLogo.png";
import blackLogo from "../../logos/blackLogo.png";
import SearchBar from "../search/search_bar";
import ImageNavbar from "./image_navbar";
import AuthNavbar from "./auth_navbar";

const SearchNavbar = ({ history }) => {
  const isOnRoot = () => {
    return history.location.pathname === "/";
  };

  return (
    <Grid textAlign="center">
      <Grid.Row columns={3}>
        <Grid.Column style={{ top: "50%" }}>
          <ImageNavbar currentContainer="search" isOnRoot={isOnRoot()} />
        </Grid.Column>
        <Grid.Column style={{ top: "20%" }}>
          <img
            alt="tagless logo"
            src={isOnRoot() ? whiteLogo : blackLogo}
            height="100px"
          />
        </Grid.Column>
        <Grid.Column style={{ top: "50%" }}>
          <AuthNavbar isOnRoot={isOnRoot()} />
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
};

function mapStateToProps({ search }) {
  return { results: search.results };
}

export default withRouter(connect(mapStateToProps)(SearchNavbar));
