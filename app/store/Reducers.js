import Immutable from 'immutable';
import {combineReducers} from 'redux';
import DefaultState from './DefaultState';

//const initialState = new Immutable.Map(DefaultState);
const initialState = DefaultState;

export default function update(state = initialState, action) {
  switch (action.type) {
    case "ADD_RESOURCE":
      var newCredits = state.credits;
      return Object.assign({}, state, {
        resources: state.resources.map( (resource) => {
         if ( resource.id === action.id ) {
           newCredits += resource.credits;
         }
         return resource;
       }),
       credits: newCredits
     });
    default:
      console.log("No Action Found.");
  }

  return state;
}

export default function() {
  return update;
};
