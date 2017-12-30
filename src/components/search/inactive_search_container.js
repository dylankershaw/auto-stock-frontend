import React, { Component } from "react";
import SearchNavbar from "../navigation/search_navbar";

class InactiveSearchContainer extends Component {
  images = ["1514594277.jpeg", "1514597615.jpeg", "1514597663.jpeg"];
  url = "https://storage.googleapis.com/auto-stock-189103.appspot.com/";

  constructor(props) {
    super(props);

    this.state = { imageUrl: this.url + this.images[0] };
  }

  componentDidMount() {
    let currentImageIndex = 0;

    // cycles through images and changes background every five seconds
    setInterval(() => {
      currentImageIndex =
        currentImageIndex === this.images.length - 1
          ? 0
          : currentImageIndex + 1;

      this.setState({ imageUrl: this.url + this.images[currentImageIndex] });
    }, 5000);
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${this.state.imageUrl})`,
          backgroundSize: "cover",
          height: "1000px"
        }}
      >
        <SearchNavbar textColor="white" />
      </div>
    );
  }
}

export default InactiveSearchContainer;
