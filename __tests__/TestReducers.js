'use strict';

jest.unmock("../app/store/GameData.js");
jest.unmock("../app/store/Reducers.js");
jest.unmock("../app/constants/InitialGameData.js");
jest.unmock("../app/actions/Actions.js");
jest.unmock("node-uuid");
jest.unmock("immutable");
jest.unmock("redux");

import RootReducer from "../app/store/Reducers.js"
import GameData from "../app/constants/InitialGameData.js"
import * as Actions from "../app/actions/Actions.js"
import Immutable from 'immutable';

describe('Reducers', () => {
  var initialState;

  beforeEach(() => {
    initialState = {gameData: Immutable.fromJS(GameData)};
  });

  it('adds resources', () => {
    Object.keys(GameData.resourceData).forEach( (key) => {
      const resource = GameData.resourceData[key];
      const AddResourceAction = Actions.addResource(resource.id);
      const state = RootReducer(initialState, AddResourceAction);
      expect(state.gameData.getIn(['resources', key])).toEqual(1);
    });
  });

  it('adds money when a resource is sold', () => {
    Object.keys(GameData.resourceData).forEach( (key) => {
      const resource = GameData.resourceData[key];
      const AddResourceAction = Actions.addResource(resource.id);
      const SellResourceAction = Actions.sellResource(resource.id);
      const state1 = RootReducer(initialState, AddResourceAction);
      const state2 = RootReducer(state1, SellResourceAction);

      expect(state2.gameData.getIn(['resources', key])).toEqual(0);
      expect(state2.gameData.get('money')).toEqual(resource.price);
    });
  });

  it('does nothing when a resource with zero amount is sold', () => {
    Object.keys(GameData.resourceData).forEach( (key) => {
      const resource = GameData.resourceData[key];
      const SellResourceAction = Actions.sellResource(resource.id);
      const state = RootReducer(initialState, SellResourceAction);
      expect(state).toEqual(initialState);
    });
  });
})
