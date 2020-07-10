import { SET_LIST_TICKET, ADD_LIST_TICKET_PAGE,ADD_TICKET } from './actionTypes';

export const setListTicket = (list = []) => {
  return {
    type: SET_LIST_TICKET,
    value: list,
  };
};

export const addTicket = (ticket) => {
  return {
    type: ADD_TICKET,
    value: ticket
  }
}