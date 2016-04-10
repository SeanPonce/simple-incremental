import Immutable from 'immutable';
import InitialGameData from '../constants/InitialGameData.js';

const initialState = Immutable.fromJS(InitialGameData);

function getTime() {
  return window.performance.now();
}

function updateUpgrades(state) {
  var resourceData = Object.assign({}, InitialGameData.resourceData);

  state.get('upgrades').keySeq().forEach((type) => {
    const upgrade = state.getIn(['upgrades', type]);
    if ( upgrade.get('purchased') === true ) {
      switch( type ) {
        case "UNLOCK_SILVER":
          resourceData.silver.enabled = true;
          break;
        case "UNLOCK_GOLD":
          resourceData.gold.enabled = true;
          break;
      }
    }
  });

  return Immutable.fromJS(resourceData);
}

export default function(state = initialState, action) {
  var newState = state;
  switch (action.type) {
    case "ADD_RESOURCE":
      newState = state.updateIn(['resources', action.id], amount => amount + 1);
      break;

    case "SELL_RESOURCE":
      if ( state.getIn(['resources', action.id]) > 0 ) {
        newState = state.updateIn(['resources', action.id], amount => amount - 1);
        newState = newState.update('money', money => money + state.getIn(['resourceData', action.id, 'price']));
      }
      break;

    case "BUY_UPGRADE":
      var money = state.get('money');
      var price = state.getIn(['upgrades', action.id, 'price']);
      if ( price <= money ) {
        newState = state.set('money', money - price);
        newState = newState.setIn(['upgrades', action.id, 'purchased'], true);
        newState = newState.set('resourceData', updateUpgrades(newState));
      }
      break;

    case "START_PROGRESS":
      if ( state.getIn(['progress', action.id]) === undefined ) {
        newState = state.setIn(['progress', action.id], {
          start: getTime(),
          id: action.id,
          progress: 0,
          duration: 2000
        });
      }
      break;

    case "UPDATE_PROGRESS":
      const current = getTime();
      var completeList = [];
      newState = state.set('progress', state.get('progress').map((progress) => {
        progress.progress = 100*(current - progress.start) / progress.duration;
        if ( progress.progress >= 100 ) {
          completeList.push(progress.id);
          return undefined;
        }
        return progress;
      }).filter(progress => progress !== undefined));

      completeList.forEach((id) => {
        newState = newState.updateIn(['resources', id], amount => amount + 1);
      })
      break;

    default:
      break;
  }
  //console.log(newState);
  return newState;
}
