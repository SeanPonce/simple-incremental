import Immutable from 'immutable';
import {combineReducers} from 'redux';
import DefaultState from './DefaultState';

const initialState = Immutable.fromJS(DefaultState);

function gameData(state = initialState, action) {
  var newState = state;
  switch (action.type) {
    case "ADD_RESOURCE":
      // TODO how to change value in map in list in map?
      var resourcesPOJO = state.get('resources').toJS();
      resourcesPOJO = resourcesPOJO.map( (resource) => {
        if ( resource.id === action.id ) {
          resource.amount += 1;
        }
        return resource;
      });
      newState = state.set('resources', Immutable.fromJS(resourcesPOJO));
      break;
    case "SELL_RESOURCE":
      // TODO how to change value in map in list in map?
      var newMoney = state.get('money');
      var resourcesPOJO = state.get('resources').toJS();
      resourcesPOJO = resourcesPOJO.map( (resource) => {
        if ( resource.id     === action.id &&
             resource.amount >   0 ) {
          resource.amount -= 1;
          newMoney += resource.price;
        }
        return resource;
      });
      // Do not update state if nothing was soldsimp  npm
      if ( newMoney !== state.get('money') ) {
        newState = state.set('resources', Immutable.fromJS(resourcesPOJO))
          .set('money', newMoney);
      }
      break;
    case "BUY_UPGRADE":
      // TODO how to change value in map in list in map?
      var price = 0;
      var upgradesPOJO = state.get('upgrades').toJS();
      upgradesPOJO = upgradesPOJO.map((upgrade) => {
        if ( upgrade.id === action.id &&
             state.get('money') > upgrade.price ) {
          price = upgrade.price;
          return Object.assign({}, upgrade, {state: 'purchased'});
        }
        return upgrade;
      });
      newState = state.set('upgrades', Immutable.fromJS(upgradesPOJO));
      newState = newState.set('money', newState.get('money') - price);
      break;
    default:
      console.log("Action not recognized: " + action.type);
      break;
  }

  if ( newState.get('money') > state.get('money') ) {
    var upgrades = state.get('upgrades').toJS();
    upgrades = upgrades.map((upgrade) => {
      if ( upgrade.state === 'hidden' &&
          newState.get('money') > (upgrade.price * 0.5) ) {
        console.log(upgrade.name + " is " + 'available');
        upgrade.state = 'available';
      }
      return upgrade;
    });
    return newState.set('upgrades', Immutable.fromJS(upgrades));
  }

  //console.log(newState);
  return newState;
}

export default combineReducers({
    gameData
});
