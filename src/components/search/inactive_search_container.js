import React, { Component } from "react";
import SearchNavbar from "../navigation/search_navbar";

class InactiveSearchContainer extends Component {
  images = ["1514857952.jpeg", "1514857915.jpeg", "1514857935.jpeg"];
  url = "https://storage.googleapis.com/auto-stock-189103.appspot.com/";

  constructor(props) {
    super(props);

    this.state = { imageUrl: this.url + this.images[0] };
  }

  componentDidMount() {
    let index = 0;

    // changes background image every five seconds
    setInterval(() => {
      index = index === this.images.length - 1 ? 0 : index + 1;

      this.setState({ imageUrl: this.url + this.images[index] });
    }, 5000);
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${this.state.imageUrl})`,
          backgroundSize: "cover",
          height: parseInt(window.innerHeight, 10) + 14 + "px"
        }}
      >
        <SearchNavbar textColor="white" />
      </div>
    );
  }
}

export default InactiveSearchContainer;
