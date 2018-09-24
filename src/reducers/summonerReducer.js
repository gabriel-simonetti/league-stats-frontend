import Immutable from 'immutable';
import { actionTypes } from '../actions';

const defaultState = Immutable.Map({
  summoner: null
});

export default (state = defaultState, action) => {
  switch(action.type){
    case actionTypes.LOAD_SUMMONER:
        return state.set('summoner', action.summonerInfo);
    default:
      return state;
  }
};