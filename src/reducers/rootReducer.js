import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import athletes from './athletes';
import donations from './donations';

const rootReducer = combineReducers({
  athletes,
  donations,
  routing: routerReducer
});

export default rootReducer;
