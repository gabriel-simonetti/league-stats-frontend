import React, {Component} from 'react';

class Summoner extends Component {
  render() {
    return (
      <div>
        <h6 className="mb-2 text-muted">Summoner Name</h6>
        <p>{this.props.summoner.details.name }</p>
      </div>
    );
  }
}

export default Summoner;