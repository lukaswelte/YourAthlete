import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer';
import App from './App';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Idea from './pages/Idea';
import AthleteOverview from './pages/AthleteOverview';
import './index.css';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const store = createStore(rootReducer);

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="idee" component={Idea}/>
        <Route path="athleten" component={AthleteOverview}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  </Provider>
  ), document.getElementById('root')
);
