import React, {Component} from 'react';

class SummonerSpells extends Component {
  spellNames(){
    let spells = [];
    for(let i=0; i < this.props.summonerSpells.length; i++){
      spells.push(this.props.summonerSpells[i].name);
    }
    return spells;
  }
  render() {
    return (
      <p>{this.spellNames().join(', ')}</p>
    );
  }
}

export default SummonerSpells;