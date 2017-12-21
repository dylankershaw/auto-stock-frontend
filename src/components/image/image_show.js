import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";

import Label from "../label.js";

class ImageShow extends Component {
  // iterates through each imageLabel to find the one associated with a given label, and returns its score
  findScore = label => {
    return this.props.image.imageLabels.find(imageLabel => {
      return imageLabel.label_id === label.id;
    }).relevancyScore;
  };

  render() {
    if (this.props.image.id) {
      const imageUser = this.props.image.user;

      const sortedLabels = this.props.image.labels.sort((a, b) => {
        return this.findScore(b) - this.findScore(a);
      });

      return (
        <div>
          <div>
            UPLOADED BY:{" "}
            <Link to={`/users/${imageUser.id}`}>
              {imageUser.username.toUpperCase()}
            </Link>
          </div>
          <img
            alt={this.props.image.labels[0].name}
            src={this.props.image.url}
            width="250"
          />
          {sortedLabels.map(label => {
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
    } else {
      return (
        <div>
          <br />
          Invalid image ID.<br />
          {/* <Link to="/">Return to homepage?</Link> */}
        </div>
      );
    }
  }
}

function mapStateToProps({ image }) {
  return { image };
}

export default connect(mapStateToProps)(ImageShow);
