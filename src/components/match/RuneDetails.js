import React, {Component} from 'react';
import Rune from "./Rune";

class RuneDetails extends Component {
  render() {
    return (
      <div>
        <h6 className="mb-2 text-muted">Rune Paths:</h6>
        <div className="card-deck">
          <Rune isMainRune={true} rune={this.props.runes.mainRune}/>
          <Rune isMainRune={false} rune={this.props.runes.subRune}/>
        </div>
        <p>&nbsp;</p>
      </div>
    );
  }
}

export default RuneDetails;