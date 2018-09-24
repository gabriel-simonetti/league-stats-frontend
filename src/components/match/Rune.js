import React, {Component} from 'react';

class Rune extends Component {
  runeType(){
    return this.props.isMainRune ? 'Main Path' : 'Secondary Path'
  }

  render() {
    if(this.props.rune === undefined || this.props.rune.rune === undefined){
      return (
      <div className="card">
        <div className="card-body">
          <h6 className="mb-2 text-muted">No Runes</h6>
        </div>
      </div>
      );
    } else {
      return (
        <div className="card">
          <div className="card-body">
            <h6 className="mb-2 text-muted">{this.runeType()}: { this.props.rune.rune.name }</h6>
            <ul>
              { this.props.rune.perks.map(perk => {
                return <li key={perk.id}>{perk.name}</li>
              }) }
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default Rune;