import {
  FetchErrorAction,
  FetchingAction,
  FetchSuccessAction,
} from "../../types/actionTypes";
import { ITicket } from "../../types/types";

export const fetchTicketsSuccess = (payload: ITicket[]): FetchSuccessAction => {
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

export const fetchTickets = () => {
  return function (dispatch: any) {
    dispatch(fetching());

    return fetch(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${"adc528ca246de5a2ba04d70790fdf19e"}`
    )
      .then(
        (response) => response.json(),
        (error) => dispatch(fetchTicketsError(error))
      )
      .then((json) => dispatch(fetchTicketsSuccess(json.tickets)));
  };
};
