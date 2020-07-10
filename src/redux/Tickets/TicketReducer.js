import { SET_LIST_TICKET, ADD_LIST_TICKET_PAGE, ADD_TICKET } from './actionTypes';

const TicketReducers = (Ticket = { list: [], page:1 }, action) => {
  console.log('TicketReducers', action);
  switch (action.type) {
    case SET_LIST_TICKET:
      return { ...{ page: 1, list: action.value } };
    case ADD_LIST_TICKET_PAGE:
      return {
        ...{
          page: action.page,
          list: [...Ticket.list, ...action.list]
        }
      }
    case ADD_TICKET:
      // listPlans.pop(action.value)
      return {
        ...Ticket, ...{ list: [ ...[action.value], ...Ticket.list] }
      }
    default:
      return Ticket;
  }
};

export default TicketReducers;
