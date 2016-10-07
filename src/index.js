import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers/rootReducer';
import App from './App';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Idea from './pages/Idea';
import AthleteOverview from './pages/AthleteOverview';
import AthleteDetail from './pages/AthleteDetail';
import BecomeAnAthlete from './pages/BecomeAnAthlete';
import './index.css';

import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const middleware = routerMiddleware(browserHistory);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(middleware)));
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="idee" component={Idea}/>
        <Route path="athleten" component={AthleteOverview} />
        <Route path="athlet/:name" component={AthleteDetail} />
        <Route path="werde-athlet" component={BecomeAnAthlete} />
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  </Provider>
  ), document.getElementById('root')
);
