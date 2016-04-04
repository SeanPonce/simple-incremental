import Immutable from 'immutable';
import {combineReducers} from 'redux';
import DefaultState from './DefaultState';

const initialState = Immutable.fromJS(DefaultState);

function gameData(state = initialState, action) {
  var newState = state;
  switch (action.type) {
    case "ADD_RESOURCE":
      var newCredits = state.get('credits');
      state.get('resources').forEach( (resource) => {
        if ( resource.get('id') === action.id ) {
          newCredits += resource.get('credits');
        }
      });
      newState = state.set('credits', newCredits);
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
