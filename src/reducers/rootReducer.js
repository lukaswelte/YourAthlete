import { combineReducers } from 'redux';
import athletes from './athletes';

const rootReducer = combineReducers({
  athletes,
});

export default rootReducer;
