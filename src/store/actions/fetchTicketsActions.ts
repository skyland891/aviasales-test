import {
  FetchErrorAction,
  FetchingAction,
  FetchSuccessAction,
  SortAction,
  FilterByStopsAction,
  AddLengthAction,
} from "../../types/actionTypes";
import { ITicket } from "../../types/types";

interface Response {
  tickets: ITicket[];
  stop: boolean;
}

export const getSearchId = (payload: string) => {
  return {
    type: "GET_SEARCH_ID",
    payload,
  };
};

interface fetchTicketsSuccessPayloadType {
  tickets: ITicket[];
  stop: boolean;
}

export const fetchTicketsSuccess = (
  payload: fetchTicketsSuccessPayloadType
): FetchSuccessAction => {
  return {
    type: "FETCH_SUCCESS",
    payload,
  };
};

export const fetching = (): FetchingAction => {
  return {
    type: "FETCHING",
  };
};

export const fetchTicketsError = (payload: any): FetchErrorAction => {
  return {
    type: "FETCH_ERROR",
    payload,
  };
};

export const fetchTickets = (payload: string) => {
  return function (dispatch: any) {
    dispatch(fetching());

    return fetch(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${payload}`
    )
      .then(
        (response) => {
          if (response.status === 500) {
            dispatch(fetchTicketsError(null));
            return null;
          }
          return response.json();
        },
        (error) => dispatch(fetchTicketsError(error))
      )
      .then((json: Response) =>
        setTimeout(() => {
          dispatch(fetchTicketsSuccess(json));
        }, 2000)
      );
  };
};

export const filterTickets = (payload: number[]): FilterByStopsAction => {
  return {
    type: "FILTER_BY_STOPS",
    payload,
  };
};

export const sortTickets = (payload: number): SortAction => {
  return {
    type: "SORT",
    payload,
  };
};

export const addLength = (): AddLengthAction => {
  return {
    type: "ADD_LENGTH",
  };
};

export const fetchSearchId = () => {
  return function (dispatch: any) {
    return fetch("https://aviasales-test-api.kata.academy/search")
      .then(
        (response) => response.json(),
        (error) => console.log(error)
      )
      .then((json) => dispatch(getSearchId(json.searchId)));
  };
};
