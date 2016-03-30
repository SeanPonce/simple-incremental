import Immutable from 'immutable';
import {combineReducers} from 'redux';
import DefaultState from './DefaultState';

const initialState = new Immutable.fromJS(DefaultState);

export default function update(state = initialState, action) {
  switch (action.type) {
    case "ADD_RESOURCE":
      // Match resource to action resource name
      // Modify credits based on resource + upgrades (TODO)
    default:
      return state; // No actions yet
  }
}

export default function() {
  return update;
  //return combineReducers({update});
};
