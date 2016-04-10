import Immutable from 'immutable';
import InitialGameData from '../constants/InitialGameData.js';

const initialState = Immutable.fromJS(InitialGameData);

function getTime() {
  return window.performance.now();
}

function updateUpgrades(state) {
  var resourceData2 = Immutable.fromJS(InitialGameData.resourceData).toJS();
  resourceData2.iron.price = 0;
  var resourceData = Immutable.fromJS(InitialGameData.resourceData).toJS();
  console.log(resourceData.iron.price);

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
        case "IRON_PRICE_1":
          resourceData.iron.price += 20;
          break;
        case "IRON_PRICE_2":
          resourceData.iron.price += 60;
          break;
        case "IRON_PRICE_3":
          resourceData.iron.price += 150;
          break;
        case "SILVER_PRICE_1":
          resourceData.silver.price += 50;
          break;
        case "SILVER_PRICE_2":
          resourceData.silver.price += 100;
          break;
        case "SILVER_PRICE_3":
          resourceData.silver.price += 350;
          break;
        case "GOLD_PRICE_1":
          resourceData.gold.price += 250;
          break;
        case "GOLD_PRICE_2":
          resourceData.gold.price += 500;
          break;
        case "GOLD_PRICE_3":
          resourceData.gold.price += 750;
          break;
      }
    }
  });

  return Immutable.fromJS(resourceData);
}

export default function(state = initialState, action) {
  var newState = state;
  switch (action.type) {
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
          duration: state.getIn(['resourceData', action.id, "time"])
        });
      } else {
        newState = state.updateIn(['queue', action.id], queue => queue + 1);
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
        if ( state.getIn(['queue', id]) > 0 ) {
          newState = newState.updateIn(['queue', id], queue => queue - 1);
          newState = newState.setIn(['progress', id], {
            start: getTime(),
            id: id,
            progress: 0,
            duration: newState.getIn(['resourceData', id, "time"])
          });
        }
        newState = newState.update('money', money => money + newState.getIn(['resourceData', id, 'price']));
      })
      break;

    default:
      break;
  }
  //console.log(newState);
  return newState;
}
