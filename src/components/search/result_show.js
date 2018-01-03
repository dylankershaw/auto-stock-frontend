import { Grid, Container, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import React from "react";

import BarLabel from "../label/bar_label";

const ResultShow = ({ result }) => (
  <Grid.Column as={Link} to={`/images/${result.id}`}>
    <Container>
      <Image
        centered
        src={result.url}
        style={{ height: "200px", width: "300px", objectFit: "cover" }}
      />
      <BarLabel score={result.score} />
    </Container>
  </Grid.Column>
);

export default ResultShow;
