import { connect } from 'react-redux';
import { selectServer, selectSummonerName } from '../actions';
import SelectSummonerPresentation from './SelectSummonerPresentation';
import { allowedServers } from "../config";
import { loadSummonerFromServer } from "../actions/server";

const mapStateToProps = state => {
  return {
    server: state.systemReducer.get('serverName'),
    summoner: state.systemReducer.get('summonerName'),
    allowedServers
  };
};

const matchDispatchToProps = dispatch => {
  return {
    selectServer: serverName => dispatch(selectServer(serverName)),
    selectSummonerName:  summonerName => dispatch(selectSummonerName(summonerName)),
    loadSummoner: loadSummonerFromServer(dispatch)
  }
};

export default connect(mapStateToProps, matchDispatchToProps)(SelectSummonerPresentation);