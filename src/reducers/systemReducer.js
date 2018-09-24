import Immutable from 'immutable';
import { actionTypes } from '../actions';
import { allowedServers } from "../config";
import izitoast from 'izitoast';

const defaultState = Immutable.Map({
  summonerName: '',
  serverName: 'NA',
  isLoading: false
});

export default (state = defaultState, action) => {
  switch(action.type){
    case actionTypes.SELECT_SERVER:
      if(allowedServers.indexOf(action.server) !== -1){
        return state.set('serverName', action.server);
      }
      return state;
    case actionTypes.SELECT_SUMMONER_NAME:
      return state.set('summonerName', action.summonerName);
    case actionTypes.START_LOADING:
      return state.set('isLoading', true);
    case actionTypes.FINISH_LOADING:
      return state.set('isLoading', false);
    case actionTypes.SHOW_ERROR_MESSAGE:
      izitoast.error({title: 'Error', message: (action.message ? action.message : 'Could not perform this operation.')});
      return state;
    default:
      return state;
  }
};