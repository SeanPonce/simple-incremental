'use strict';

jest.unmock("../app/store/Reducers.js");
jest.unmock("../app/store/DefaultState.js");
jest.unmock("../app/actions/Actions.js");
jest.unmock("node-uuid");
jest.unmock("immutable");
jest.unmock("redux");

import RootReducer from "../app/store/Reducers.js"
import DefaultState from "../app/store/DefaultState.js"
import * as Actions from "../app/actions/Actions.js"
import Immutable from 'immutable';

describe('Reducers', () => {
  it('adds credits based on the resource', () => {
    const initialState = {gameData: Immutable.fromJS(DefaultState)};
    DefaultState.resources.forEach( (resource) => {
      const AddResourceAction = Actions.addResource(resource.id);
      const state = RootReducer(initialState, AddResourceAction);
      expect(state.gameData.get('credits')).toEqual(resource.credits);
    });
  });
})
