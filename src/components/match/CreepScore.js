import React, {Component} from 'react';

class CreepScore extends Component {
  render() {
    return (
      <span>
        {this.props.formattedData.creepScore} <small>({this.props.formattedData.creepScorePerMinute.toFixed(1)})</small>
      </span>
    );
  }
}

export default CreepScore;