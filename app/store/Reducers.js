import Immutable from 'immutable';
import {combineReducers} from 'redux';
import {REHYDRATE} from 'redux-persist/constants';
import DefaultState from './DefaultState';

const initialState = Immutable.fromJS(DefaultState);

function updateUpgrades(state) {
  var resourceData = Object.assign({}, DefaultState.resourceData);

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

function gameData(state = initialState, action) {
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

    default:
      console.log("Action not recognized: " + action.type);
      break;
  }
  //console.log(newState);
  return newState;
}

export default combineReducers({
    gameData
});
