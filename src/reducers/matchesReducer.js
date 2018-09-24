import Immutable from 'immutable';
import { actionTypes } from '../actions';

const defaultState = Immutable.fromJS({
  unloadedMatchList: [],
  loadedMatchList: []
});

export default (state = defaultState, action) => {
  switch(action.type){
    case actionTypes.LOAD_SUMMONER:
      if(action.summonerInfo === null){
        return defaultState;
      }
      return state;
    case actionTypes.LOAD_SUMMONER_MATCHES:
      return state.set('unloadedMatchList', Immutable.fromJS(action.matches.matches));
    case actionTypes.START_LOAD_SINGLE_MATCH:
      let newUnLoadedMatchList = state.get('unloadedMatchList').toJS();
      newUnLoadedMatchList.shift();
      return state.set('unloadedMatchList', Immutable.fromJS(newUnLoadedMatchList));
    case actionTypes.LOAD_SINGLE_MATCH:
      let newLoadedMatchList = state.get('loadedMatchList').toJS();
      newLoadedMatchList[action.matchData.index] = action.matchData.result;
      return state.set('loadedMatchList', Immutable.fromJS(newLoadedMatchList));
    default:
      return state;
  }
};