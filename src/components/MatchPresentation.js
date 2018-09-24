import React, {Component} from 'react';
import Summary from './match/Summary';
import Champion from "./match/Champion";
import RuneDetails from "./match/RuneDetails";
import ItemBuild from "./match/ItemBuild";
import Summoner from "./match/Summoner";

class MatchPresentation extends Component {

  summaryData(){
    return {
      outcome: this.props.formattedData.outcome,
      mapName: this.props.formattedData.map.mapName,
      championName: this.props.formattedData.champion.name,
      duration: this.props.formattedData.duration,
      formattedGameTime: this.props.formattedData.formattedGameTime
    }
  }

  borderColor(){
    if(this.props.formattedData.outcome === 'Victory'){
      return 'card game-card border-success';
    }
    return 'card game-card border-danger';
  }

  render() {
    return (
      <div className={this.borderColor()}>
        <div className="card-header collapsed" data-toggle="collapse" data-target={"#collapse-" + this.props.currentIndex} aria-expanded="false" aria-controls={"collapse-" + this.props.currentIndex}>
          <Summary summary={this.summaryData()} />
        </div>
        <div className="card-body collapse" id={"collapse-" + this.props.currentIndex}>
          <Summoner summoner={this.props.currentSummoner}/>
          <Champion formattedData={this.props.formattedData}/>
          <RuneDetails runes={this.props.formattedData.summonerRunes}/>
          <ItemBuild items={this.props.formattedData.items} />
        </div>
      </div>
    );
  }
}

export default MatchPresentation;