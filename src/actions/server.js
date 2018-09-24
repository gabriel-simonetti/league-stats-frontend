import {
  startLoading,
  finishLoading,
  loadSummoner,
  loadSummonerMatches,
  showErrorMessage,
  loadSingleMatch
} from './index';

/**
 * Loads summoner data from the server.
 * Dispatches all relevant actions.
 * @param dispatch
 * @returns {Function}
 */
export const loadSummonerFromServer = (dispatch) => (details) => {
  const summonerName = details.summonerName;
  const serverName = details.serverName;
  dispatch(startLoading());
  dispatch(loadSummoner(null));

  fetch([process.env.REACT_APP_BACKEND_PATH,"summoner",summonerName, serverName].join('/'))
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(res.statusText);
      }
    })
    .then(
      (result) => {
        dispatch(finishLoading());
        dispatch(loadSummoner(result));

      },
      (error) => {
        dispatch(finishLoading());
        dispatch(showErrorMessage(error));
        dispatch(loadSummoner(null));
      }
    )
};

/**
 * Loads summoner data from the server.
 * Dispatches all relevant actions.
 * @param dispatch
 * @returns {Function}
 */
export const loadMatchesFromServer = (dispatch) => (details) => {
  const accountId = details.accountId;
  const serverName = details.serverName;
  dispatch(startLoading());

  fetch([process.env.REACT_APP_BACKEND_PATH,"matches",accountId, serverName].join('/'))
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(res.statusText);
      }
    })
    .then(
      (result) => {
        dispatch(finishLoading());
        dispatch(loadSummonerMatches(result));
      },
      (error) => {
        dispatch(finishLoading());
        dispatch(showErrorMessage(error));
      }
    )
};

/**
 * Loads summoner data from the server.
 * Dispatches all relevant actions.
 * @param dispatch
 * @returns {Function}
 */
export const loadMatchDataFromServer = (dispatch) => (details) => {
  const matchId = details.matchId;
  const serverName = details.serverName;
  const index = details.index;
  dispatch(startLoading());

  fetch([process.env.REACT_APP_BACKEND_PATH,"match",matchId, serverName].join('/'))
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(res.statusText);
      }
    })
    .then(
      (result) => {
        dispatch(finishLoading());
        dispatch(loadSingleMatch({ result, index }));

      },
      (error) => {
        dispatch(finishLoading());
        dispatch(showErrorMessage(error));
      }
    )
};