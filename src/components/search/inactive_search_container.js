import React from "react";
import SearchNavbar from "../navigation/search_navbar";

const InactiveSearchContainer = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://storage.googleapis.com/auto-stock-189103.appspot.com/1514594277.jpeg)",
        backgroundSize: "cover",
        height: "1000px"
      }}
    >
      <SearchNavbar textColor="white" />
    </div>
  );
};

export default InactiveSearchContainer;
