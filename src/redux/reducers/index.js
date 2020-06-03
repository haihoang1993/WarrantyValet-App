import {combineReducers} from 'redux';
import counterReducers from './CounterReducers';

const allReducers = combineReducers({
  counterReducers,
});
export default allReducers;
