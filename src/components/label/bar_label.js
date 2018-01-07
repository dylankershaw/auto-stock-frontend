import { Progress } from "semantic-ui-react";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class BarLabel extends Component {
  barScore = 0;

  constructor(props) {
    super(props);

    this.state = {
      score: 0
    };
  }

  // triggers bar animation by changing score from 0 after 200ms
  componentDidMount() {
    setTimeout(() => {
      this.setState({ score: this.props.score });
    }, 200);
  }

  render() {
    return (
      <div>
        <Progress
          label={
            this.props.name ? (
              <div className="barLabelName">{this.props.name}</div>
            ) : null
          }
          labelColor="red"
          as={this.props.name ? Link : null}
          to={`/search/${this.props.name}`}
          value={Math.round(this.state.score * 100)}
          progress="percent"
          precision={0}
          total="100"
          color="blue"
          inverted
        />
      </div>
    );
  }
}

export default BarLabel;
