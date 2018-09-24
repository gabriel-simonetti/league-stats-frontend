import React, {Component} from 'react';
import helpers from '../helpers';
import MatchPresentation  from './MatchPresentation';
import moment from 'moment';

class MatchContainer extends Component {

  getCurrentSummonerInfo(matchData, currentSummoner){
    let i, currentParticipant;
    for(i=0; i < matchData.participantIdentities.length; i++){
      if(matchData.participantIdentities[i].player.summonerName === currentSummoner.name){
        currentParticipant = matchData.participantIdentities[i].player;
        currentParticipant.participantId = matchData.participantIdentities[i].participantId;
      }
    }

    for(i=0; i < matchData.participants.length; i++){
      if(matchData.participants[i].participantId === currentParticipant.participantId){
        currentParticipant = matchData.participants[i];
      }
    }

    for(i=0; i < matchData.teams.length; i++){
      if(matchData.teams[i].teamId === currentParticipant.teamId){
        currentParticipant.teamInfo = matchData.teams[i];
      }
    }

    currentParticipant.details = currentSummoner;

    return currentParticipant;
  }

  formattedData(){
    let currentSummoner = this.getCurrentSummonerInfo(this.props.matchData, this.props.currentSummoner);
    let outcome = currentSummoner.teamInfo.win === 'Win' ? 'Victory' : 'Defeat';
    let duration = (Math.floor(this.props.matchData.gameDuration / 60)) + 'm ' + (this.props.matchData.gameDuration % 60) + 's';
    let summonerName = currentSummoner.details.name;
    let summonerSpells = [helpers.getSummonerSpellById(currentSummoner.spell1Id), helpers.getSummonerSpellById(currentSummoner.spell2Id)];
    let summonerLevel = currentSummoner.stats.champLevel;
    let summonerRunes = helpers.getSummonerRunes(currentSummoner.stats);
    let KDA = helpers.getKDA(currentSummoner.stats);
    let creepScore = helpers.getCreepScore(currentSummoner.stats);
    let creepScorePerMinute = helpers.getCreepScorePerMinute(this.props.matchData, currentSummoner.stats);
    let champion = helpers.getChampionById(currentSummoner.championId);
    let items = helpers.getItems(currentSummoner.stats);
    let gameMode = helpers.getGameModeById(this.props.matchData.gameMode);
    let map = helpers.getMapNameById(this.props.matchData.mapId);
    let gameType = helpers.getGameTypeById(this.props.matchData.gameType);
    let gameTime = moment(this.props.matchData.gameCreation);
    let formattedGameTime = gameTime.format('l') + ' ' + gameTime.format('LT');

    return {
      outcome,
      duration,
      summonerName,
      summonerLevel,
      summonerSpells,
      summonerRunes,
      KDA,
      champion,
      creepScore,
      creepScorePerMinute,
      items,
      gameMode,
      gameType,
      map,
      formattedGameTime
    }
  }

  render() {
    return (
      <MatchPresentation
        formattedData={this.formattedData()}
        key={this.props.currentIndex}
        currentIndex={this.props.currentIndex}
        currentSummoner={this.getCurrentSummonerInfo(this.props.matchData, this.props.currentSummoner)}
        matchData={this.props.matchData} />
    );
  }
}

export default MatchContainer;