import { connect } from 'react-redux';
import MatchListPresentation from './MatchListPresentation';
import { loadMatchesFromServer, loadMatchDataFromServer } from "../actions/server";
import { startLoadSingleMatch } from '../actions';

const mapStateToProps = state => {
  let summonerReducer = state.summonerReducer.toJS();
  let systemReducer = state.systemReducer.toJS();
  let matchesReducer = state.matchesReducer.toJS();

  return {
    summoner: summonerReducer.summoner,
    server: systemReducer.serverName,
    loadedMatchList: matchesReducer.loadedMatchList,
    unloadedMatchList: matchesReducer.unloadedMatchList,
    loadingMatchList: matchesReducer.loadingMatchList
  };
};

const matchDispatchToProps = dispatch => {
  return {
    loadMatches: loadMatchesFromServer(dispatch),
    loadMatchData: loadMatchDataFromServer(dispatch),
    startLoadingMatchData: () => dispatch(startLoadSingleMatch())
  }
};

export default connect(mapStateToProps, matchDispatchToProps)(MatchListPresentation);