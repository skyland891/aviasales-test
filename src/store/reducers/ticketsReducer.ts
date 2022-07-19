import { ITicket } from "../../types/types";
import { ticketsAction } from "../../types/actionTypes";

export interface ticketsState {
  tickets: ITicket[];
  searchId: string | null;
  showedTickets: ITicket[];
  filtredTickets: ITicket[];
  stop: boolean | null;
  isLoading: boolean;
  isError: boolean;
  showedTicketsLength: number;
}

const initialState: ticketsState = {
  tickets: [],
  searchId: null,
  showedTickets: [],
  filtredTickets: [],
  stop: null,
  isLoading: false,
  isError: false,
  showedTicketsLength: 0,
};

const GET_SEARCH_ID = "GET_SEARCH_ID";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";
const FETCHING = "FETCHING";
const FILTER_BY_STOPS = "FILTER_BY_STOPS";
const SORT = "SORT";
const ADD_LENGTH = "ADD_LENGTH";

const sortByPrice = (a: ITicket, b: ITicket) => {
  return a.price > b.price ? 1 : -1;
};
const sortByDuration = (a: ITicket, b: ITicket) => {
  return a.segments[0].duration + a.segments[1].duration >
    b.segments[0].duration + b.segments[1].duration
    ? 1
    : -1;
};

export const ticketsReducer = (state = initialState, action: ticketsAction) => {
  const newState: ticketsState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case FETCHING:
      return { ...newState, isLoading: true, isError: false };
    case FETCH_SUCCESS:
      return {
        ...newState,
        tickets: [...newState.tickets, ...action.payload.tickets],
        stop: action.payload.stop,
        isLoading: false,
        isError: false,
      };
    case FETCH_ERROR:
      return {
        ...newState,
        isLoading: false,
        isError: true,
        stop: true,
      };
    case FILTER_BY_STOPS:
      return {
        ...newState,
        filtredTickets: newState.tickets.filter(
          (ticket: ITicket) =>
            action.payload.includes(ticket.segments[0].stops.length) &&
            action.payload.includes(ticket.segments[1].stops.length)
        ),
      };
    case SORT:
      switch (action.payload) {
        case 1:
          newState.filtredTickets.sort(sortByPrice);
          break;
        case 2:
          newState.filtredTickets.sort(sortByDuration);
          break;
        case 3:
          newState.filtredTickets.sort(sortByDuration);
          newState.filtredTickets.sort(sortByPrice);
          break;
        default:
          break;
      }
      return { ...newState, showedTickets: newState.filtredTickets };
    case GET_SEARCH_ID:
      return {
        ...newState,
        searchId: action.payload,
      };
    case ADD_LENGTH:
      return {
        ...newState,
        showedTicketsLength: newState.showedTicketsLength + 5,
      };
    default:
      return state;
  }
};
