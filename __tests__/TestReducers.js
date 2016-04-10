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

  it('has no tests!', () => {
    expect(0).toEqual(0);
  });
})
