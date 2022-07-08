import { ITicket } from "../../types/types";
import { ticketsAction } from "../../types/actionTypes";

export interface ticketsState {
  tickets: ITicket[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: ticketsState = {
  tickets: [],
  isLoading: false,
  isError: false,
};

const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";
const FETCHING = "FETCHING";

export const ticketsReducer = (state = initialState, action: ticketsAction) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, tickets: [], isLoading: true, isError: false };
    case FETCH_SUCCESS:
      return {
        ...state,
        tickets: action.payload,
        isLoading: false,
        isError: false,
      };
    case FETCH_ERROR:
      return { ...state, tickets: [], isLoading: false, isError: true };
    default:
      return state;
  }
};
