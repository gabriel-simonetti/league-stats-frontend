import React, {Component} from 'react';
import KDA from "./KDA";
import SummonerSpells from "./SummonerSpells";
import CreepScore from "./CreepScore";

class Champion extends Component {
  render() {
    return (
      <div>
        <h6 className="mb-2 text-muted">Champion</h6>
        <p>
          {this.props.formattedData.champion.name } Level {this.props.formattedData.summonerLevel}
          </p>
        <h6 className="mb-2 text-muted">Creep Score</h6>
        <p><CreepScore formattedData={this.props.formattedData}/></p>
        <h6 className="mb-2 text-muted">KDA</h6>
        <p><KDA formattedData={this.props.formattedData}/></p>
        <h6 className="mb-2 text-muted">Summoner Spells</h6>
          <SummonerSpells summonerSpells={this.props.formattedData.summonerSpells}/>
      </div>
    );
  }
}

export default Champion;