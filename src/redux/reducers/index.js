import {combineReducers} from 'redux';
import counterReducers from './CounterReducers';
import {PlansReducer} from '../Plans';
import {ProductsReducer} from '../Products';
import {TicketReducer} from '../Tickets';

const allReducers = combineReducers({
  counterReducers,
  PlansReducer,
  ProductsReducer,
  TicketReducer
});

export default allReducers;
