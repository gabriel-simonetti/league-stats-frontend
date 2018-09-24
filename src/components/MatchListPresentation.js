import React, {Component} from 'react';
import MatchContainer from "./MatchContainer";

class MatchListPresentation extends Component {

  loadAllMatches(){
    this.props.loadMatches({ accountId: this.props.summoner.accountId, serverName: this.props.server });
  }

  loadThreeMatches(){
    let firstMatch = this.props.unloadedMatchList[0];
    let secondMatch = this.props.unloadedMatchList[1];
    let thirdMatch = this.props.unloadedMatchList[2];
    this.props.startLoadingMatchData();
    this.props.startLoadingMatchData();
    this.props.startLoadingMatchData();

    this.props.loadMatchData({matchId: firstMatch.gameId, serverName: this.props.server, index: this.props.loadedMatchList.length});
    this.props.loadMatchData({matchId: secondMatch.gameId, serverName: this.props.server, index: this.props.loadedMatchList.length+1});
    this.props.loadMatchData({matchId: thirdMatch.gameId, serverName: this.props.server, index: this.props.loadedMatchList.length+2});
  }

  constructor(props){
    super(props);
    this.loadAllMatches();
  }

  componentDidUpdate(prevProps){
    if(this.props.unloadedMatchList.length > 0 && this.props.loadedMatchList.length === 0 && prevProps.unloadedMatchList.length === 0){
      this.loadThreeMatches();
    }
  }

  render() {
    let i=0;
    return (
      <div className="jumbotron">
        <p className="lead">Latest Games:</p>
        <hr className="my-4" />
      {
        this.props.loadedMatchList
          .map(match => {
            if(match && match.gameId !== undefined)
              return (<MatchContainer key={i++} currentIndex={i} currentSummoner={this.props.summoner} matchData={match} />)
            else
              return ('');
          })
      }
        <hr/>
        {
          (this.props.unloadedMatchList.length > 0) ? (
            <button onClick={() => this.loadThreeMatches()} className="btn btn-info btn-block">Load More</button>
          ) : ('')
        }
      </div>
    );
  }
}

export default MatchListPresentation;