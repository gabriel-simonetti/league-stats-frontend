export const SELECT_SERVER = 'SELECT_SERVER';
export const SELECT_SUMMONER_NAME = 'SELECT_SUMMONER_NAME';
export const START_LOADING = 'START_LOADING';
export const FINISH_LOADING = 'FINISH_LOADING';
export const LOAD_SUMMONER = 'LOAD_SUMMONER';
export const LOAD_SUMMONER_MATCHES = 'LOAD_SUMMONER_MATCHES';
export const LOAD_SINGLE_MATCH = 'LOAD_SINGLE_MATCH';
export const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE';
export const START_LOAD_SINGLE_MATCH = 'START_LOAD_SINGLE_MATCH';

export const actionTypes = {
  SELECT_SERVER, SELECT_SUMMONER_NAME, START_LOADING, START_LOAD_SINGLE_MATCH, FINISH_LOADING, LOAD_SUMMONER, LOAD_SUMMONER_MATCHES, LOAD_SINGLE_MATCH, SHOW_ERROR_MESSAGE
};

export function selectServer(server) {
  return {type: SELECT_SERVER, server};
}

export function startLoading() {
  return {type: START_LOADING}
}

export function finishLoading() {
  return {type: FINISH_LOADING}
}

export function selectSummonerName(summonerName) {
  return {type: SELECT_SUMMONER_NAME, summonerName};
}

export function loadSummoner(summonerInfo) {
  return {type: LOAD_SUMMONER, summonerInfo};
}

export function loadSummonerMatches(matches){
  return {type: LOAD_SUMMONER_MATCHES, matches};
}

export function startLoadSingleMatch(matchData){
  return {type: START_LOAD_SINGLE_MATCH, matchData};
}

export function loadSingleMatch(matchData){
  return {type: LOAD_SINGLE_MATCH, matchData};
}

export function showErrorMessage(message) {
  return {type: SHOW_ERROR_MESSAGE, message};
}