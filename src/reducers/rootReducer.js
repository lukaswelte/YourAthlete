import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import athletes from './athletes';

const rootReducer = combineReducers({
  athletes,
  routing: routerReducer
});

export default rootReducer;
