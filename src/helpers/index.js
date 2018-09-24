let champions = require('../static/champion');
let items = require('../static/item');
let runes = require('../static/runesReforged');
let summonerSpells = require('../static/summoner');
let gameConstants = require('../static/gameconstants');

let helpers = {};

helpers.getSeasonById = id => {
  return gameConstants.seasons[id]
};

helpers.getQueueById = id => {
  for(let key in gameConstants.queues){
    if(gameConstants.queues[key].id === id){
      return gameConstants.queues[key];
    }
  }
};

helpers.getMapNameById = id => {
  for(let key in gameConstants.maps){
    if(gameConstants.maps[key].id === id){
      return gameConstants.maps[key];
    }
  }
};

helpers.getGameModeById = id => {
  for(let key in gameConstants.gameModes){
    if(gameConstants.gameModes[key].modeName === id){
      return gameConstants.gameModes[key];
    }
  }
};

helpers.getGameTypeById = id => {
  for(let key in gameConstants.gameTypes){
    if(gameConstants.gameTypes[key].typeName === id){
      return gameConstants.gameTypes[key];
    }
  }
};

helpers.getChampionById = id => {
  for(let key in champions.data){
    if (parseInt(champions.data[key].key) === id){
      return champions.data[key];
    }
  }
};

helpers.getKDA = stats => {
  return {
    kills: stats.kills,
    deaths: stats.deaths,
    assists: stats.assists
  };
};

/**
 * Get a rune path by its id.
 * @param id
 * @returns {*}
 */
helpers.getSummonerRunePathById = id => {
  for(let i in runes){
    if(runes[i].id === id){
      return runes[i]
    }
  }
};

/**
 * Get a rune based on its id.
 * @param id
 * @returns {*}
 */
helpers.getSummonerRuneById = id => {
  for(let i in runes){
    for(let j in runes[i].slots){
      for(let k in runes[i].slots[j].runes){
        if(runes[i].slots[j].runes[k].id === id){
          return runes[i].slots[j].runes[k];
        }
      }
    }
  }
};

/**
 * Gets all summoner runes in a match.
 * @param stats
 * @returns {{mainRune: {rune: null, perks: Array}, subRune: {rune: null, perks: Array}}}
 */
helpers.getSummonerRunes = stats => {
  let mainRune = {
    rune: null,
    perks : []
  };
  let subRune = {
    rune: null,
    perks : []
  };

  mainRune.rune = helpers.getSummonerRunePathById(stats.perkPrimaryStyle);
  subRune.rune = helpers.getSummonerRunePathById(stats.perkSubStyle);
  mainRune.perks.push(helpers.getSummonerRuneById(stats.perk0));
  mainRune.perks.push(helpers.getSummonerRuneById(stats.perk1));
  mainRune.perks.push(helpers.getSummonerRuneById(stats.perk2));
  mainRune.perks.push(helpers.getSummonerRuneById(stats.perk3));
  subRune.perks.push(helpers.getSummonerRuneById(stats.perk4));
  subRune.perks.push(helpers.getSummonerRuneById(stats.perk5));

  return {mainRune, subRune};
};

/**
 * Returns a summoner spell object based on its id.
 * @param id
 * @returns {*}
 */
helpers.getSummonerSpellById = id => {
  for(let key in summonerSpells.data){
    if (parseInt(summonerSpells.data[key].key) === id){
      return summonerSpells.data[key];
    }
  }
};

helpers.getCreepScore = stats => {
  return stats.totalMinionsKilled;
};

helpers.getCreepScorePerMinute = (matchData, playerStats) => {
  if(matchData.gameDuration > 0){
    return (playerStats.totalMinionsKilled / (matchData.gameDuration / 60));
  }
  return playerStats.totalMinionsKilled;
};

helpers.getItemById = id => {
  return (items.data[id] ? items.data[id] : null);
};

helpers.getItems = stats => {
  let result = [];
  result.push(helpers.getItemById(stats.item0));
  result.push(helpers.getItemById(stats.item1));
  result.push(helpers.getItemById(stats.item2));
  result.push(helpers.getItemById(stats.item3));
  result.push(helpers.getItemById(stats.item4));
  result.push(helpers.getItemById(stats.item5));
  result.push(helpers.getItemById(stats.item6));

  return result;
};

export default helpers;