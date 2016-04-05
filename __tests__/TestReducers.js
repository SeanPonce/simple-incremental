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
  var initialState;

  beforeEach(() => {
    initialState = {gameData: Immutable.fromJS(DefaultState)};
  });

  it('adds resources', () => {
    DefaultState.resources.forEach( (resource) => {
      const AddResourceAction = Actions.addResource(resource.id);
      const state = RootReducer(initialState, AddResourceAction);
      state.gameData.get('resources').forEach((res) => {
        if ( res.get('id') === resource.id ) {
          expect(res.get('amount')).toEqual(1);
        } else {
          expect(res.get('amount')).toEqual(0);
        }
      });
    });
  });

  it('adds money when a resource is sold', () => {
    DefaultState.resources.forEach( (resource) => {
      const AddResourceAction = Actions.addResource(resource.id);
      const SellResourceAction = Actions.sellResource(resource.id);
      const state1 = RootReducer(initialState, AddResourceAction);
      const state2 = RootReducer(state1, SellResourceAction);

      state2.gameData.get('resources').forEach((res) => {
        expect(res.get('amount')).toEqual(0);
      });
      expect(state2.gameData.get('money')).toEqual(resource.price);
    });
  });

  it('does nothing when a resource with zero amount is sold', () => {
    DefaultState.resources.forEach( (resource) => {
      const SellResourceAction = Actions.sellResource(resource.id);
      const state = RootReducer(initialState, SellResourceAction);
      expect(state).toEqual(initialState);
    });
  });
})
