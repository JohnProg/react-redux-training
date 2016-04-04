import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistory, routeReducer } from 'react-router-redux'

import * as reducers from './reducers/index';

import thunk from 'redux-thunk';
import logger from './middleware/logger';

import App from './containers/App';

// Configure our reducer
const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));

// Syncs route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory)

// Configure our store
const store = compose(
  applyMiddleware(
    reduxRouterMiddleware,
    thunk,
    logger,
  ),
  window.devToolsExtension ? window.devToolsExtension() : () => {},
)(createStore)(reducer, {});

// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
