import {combineReducers} from 'redux';
import counterReducers from './CounterReducers';
import {PlansReducer} from '../Plans';
import {ProductsReducer} from '../Products';
import {TicketReducer} from '../Tickets';
import {UserReducer} from '../User';

const allReducers = combineReducers({
  counterReducers,
  PlansReducer,
  ProductsReducer,
  TicketReducer, 
  UserReducer
});

export default allReducers;
