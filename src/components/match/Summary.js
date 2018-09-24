import React, {Component} from 'react';

class Summary extends Component {
  render() {
    return (
      <span><strong>{this.props.summary.outcome}</strong> - {this.props.summary.championName}, {this.props.summary.mapName}, { this.props.summary.duration }, {this.props.summary.formattedGameTime}</span>
    );
  }
}

export default Summary;