import React, { Component } from "react";
import { connect } from "react-redux";

import Label from "../label.js";

class ImageShow extends Component {
  // iterates through each imageLabel to find the one associated with a given label, and returns its score
  findScore = label => {
    return this.props.image.imageLabels.find(imageLabel => {
      return imageLabel.label_id === label.id;
    }).relevancyScore;
  };

  render() {
    return (
      <div>
        <img
          alt={this.props.image.labels[0].name}
          src={this.props.image.url}
          width="250"
        />
        {this.props.image.labels.map(label => {
          return (
            <div key={label.id}>
              <Label
                score={this.findScore(label)}
                name={label.name}
                id={label.id}
              />
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps({ image }) {
  return { image };
}

export default connect(mapStateToProps)(ImageShow);
