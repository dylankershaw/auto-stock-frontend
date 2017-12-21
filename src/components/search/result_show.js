import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import React from "react";

import BarLabel from "../label/bar_label";

const ResultShow = ({ result }) => (
  <Card as={Link} to={`/images/${result.id}`}>
    <img alt="" src={result.url} width="250" />
    <BarLabel score={result.score} />
  </Card>
);

export default ResultShow;
