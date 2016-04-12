 // import './css/normalize.css';
 // import './css/skeleton.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root.jsx';
import RootReducer from './store/Reducers';
import {compose, createStore, combineReducers} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import reduxPersistImmutable from 'redux-persist-immutable';

const store = createStore(RootReducer, autoRehydrate());
// persistStore(store, {transforms: [reduxPersistImmutable]});

// Uncomment to purge localStorage (DELETES GAME DATA)
persistStore(store, {transforms: [reduxPersistImmutable]}).purgeAll();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app'));
