import { combineReducers } from 'redux';
import systemReducer from './systemReducer';
import summonerReducer from './summonerReducer';
import matchesReducer from './matchesReducer';

export default combineReducers({systemReducer, summonerReducer, matchesReducer});