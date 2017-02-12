import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createStore } from './store';
import getRoutes from './RouterWrapper';

const store = createStore(browserHistory, {});
const history = syncHistoryWithStore(browserHistory, store);

const myRouter = (
  <Router history={history}>
    {getRoutes(store)}
  </Router>
);


require('./assets/css/font-awesome.css');
require('./assets/css/react-datepicker.css');
require('./assets/css/icons.css');
require('./assets/css/responsive.css');
require('./assets/css/icons-hs-backend.css');
require('./assets/css/style.css');

ReactDOM.render((
  <Provider store={store}>{myRouter}</Provider>
), document.getElementById('root'));
