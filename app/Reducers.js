import {ActionTypes} from './Actions';
import Immutable from 'immutable';
import {combineReducers} from 'redux';

const initialState = new Immutable.List();

function messages(state = initialState, action) {
  switch (action.type) {
    default:
      return state; // No actions yet
  }
}

export default function() {
  return combineReducers({messages});
};
