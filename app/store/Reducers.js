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
      // Do not update state if nothing was sold
      if ( newMoney !== state.get('money') ) {
        newState = state.set('resources', Immutable.fromJS(resourcesPOJO))
          .set('money', newMoney);
      }
      break;
    case "BUY_UPGRADE":
      // TODO how to change value in map in list in map?
      var upgradesPOJO = state.get('upgrades').toJS();
      upgradesPOJO = upgradesPOJO.map((upgrade) => {
        if ( upgrade.id === action.id ) {
          return Object.assign({}, upgrade, {enabled: !upgrade.enabled});
        }
        return upgrade;
      });
      newState = state.set('upgrades', Immutable.fromJS(upgradesPOJO));
      break;
    default:
      console.log("Action not recognized: " + action.type);
      break;
  }

  // console.log(newState);
  return newState;
}

export default combineReducers({
    gameData
});
