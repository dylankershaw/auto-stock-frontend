import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";

import SearchBar from "../search/search_bar";
import ImageNavbar from "./image_navbar";
import AuthNavbar from "./auth_navbar";

class SearchNavbar extends Component {
  render() {
    return (
      <Grid textAlign="center">
        <Grid.Row columns={3}>
          <Grid.Column />
          <Grid.Column>
            <ImageNavbar currentContainer="search" />
          </Grid.Column>
          <Grid.Column>
            <AuthNavbar />
          </Grid.Column>
        </Grid.Row>
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

export default connect(mapStateToProps)(SearchNavbar);
