import {combineReducers} from 'redux';
import counterReducers from './CounterReducers';
import {PlansReducer} from '../Plans';
import {ProductsReducer} from '../Products';

const allReducers = combineReducers({
  counterReducers,
  PlansReducer,
  ProductsReducer
});

export default allReducers;
