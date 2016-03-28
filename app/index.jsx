import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root.jsx';
import Reducers from './Reducers';
import {compose, createStore} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import reduxPersistImmutable from 'redux-persist-immutable';

//const store = Reducers();
const reducer = Reducers();
const store = createStore(reducer, compose(autoRehydrate()));
persistStore(store, {transforms: [reduxPersistImmutable]});

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app'));
