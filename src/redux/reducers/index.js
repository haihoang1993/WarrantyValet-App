import {combineReducers} from 'redux';
import counterReducers from './CounterReducers';
import listReducers from '../Plans/PlansReducer';

const allReducers = combineReducers({
  counterReducers,
  listReducers,
});
export default allReducers;
