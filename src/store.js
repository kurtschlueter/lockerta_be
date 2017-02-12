import { createStore as _createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';

const configureStore = (history, initialState = {}, reducer) => {
  const reduxRouterMiddleware = routerMiddleware(history);
  const middlewares = [thunk, reduxRouterMiddleware];

  if ((process.env.NODE_ENV !== 'production') && (process.env.NODE_ENV !== 'qa')) {
    middlewares.push(createLogger());
  }

  const finalCreateStore = compose(
    applyMiddleware(...middlewares)
  )(_createStore);

  const store = finalCreateStore(reducer, initialState);

  return store;
};

function createStore(history, data) {
  return configureStore(history, data, require('./reducers/reducers.js').default);
}

module.exports = {
  createStore
};