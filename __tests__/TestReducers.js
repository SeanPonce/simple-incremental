'use strict';

jest.unmock("../app/store/Reducers.js");
jest.unmock("../app/store/DefaultState.js");
jest.unmock("../app/actions/Actions.js");
jest.unmock("node-uuid");

import Reducers from "../app/store/Reducers.js"
import DefaultState from "../app/store/DefaultState.js"
import * as Actions from "../app/actions/Actions.js"

describe('Reducers', () => {
  it('adds credits based on the resource', () => {
    const initialState = Object.assign({}, DefaultState);
    const update = Reducers();
    DefaultState.resources.forEach( (resource) => {
      const AddResourceAction = Actions.addResource(resource.id);
      const state = update(initialState, AddResourceAction);

      expect(initialState).toEqual(DefaultState);
      expect(state.credits).toEqual(resource.credits);
    });
  });
})
