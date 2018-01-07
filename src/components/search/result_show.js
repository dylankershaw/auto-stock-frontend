import { Grid, Container, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import React from "react";

import BarLabel from "../label/bar_label";

const ResultShow = ({ result }) => (
  <Grid.Column as={Link} to={`/images/${result.id}`}>
    <Container>
      <Image centered src={result.url} className="resultShowImage" />
      <BarLabel score={result.score} />
    </Container>
  </Grid.Column>
);

export default ResultShow;
