import { Button } from "semantic-ui-react";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { enableTouched } from "../../actions";

const ImageNavbar = ({ enableTouched, isOnRoot, currentContainer }) => {
  const handleSearchClick = () => {
    enableTouched();
    const searchBar = document.getElementById("searchBar");
    searchBar.placeholder = "";
    searchBar.focus();
    searchBar.select();
  };

  return (
    <Button.Group
      basic={isOnRoot ? true : false}
      inverted={isOnRoot ? true : false}
    >
      <Button
        as={Link}
        to="/"
        active={currentContainer === "search" ? true : false}
        onClick={isOnRoot ? handleSearchClick : null}
      >
        SEARCH
      </Button>
      <Button.Or />
      <Button
        as={Link}
        to="/upload"
        active={currentContainer === "upload" ? true : false}
      >
        UPLOAD
      </Button>
    </Button.Group>
  );
};

export default connect(null, { enableTouched })(ImageNavbar);
