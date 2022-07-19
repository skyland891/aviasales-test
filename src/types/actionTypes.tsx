import { ITicket } from "./types";

export interface ActionAddFilter {
  type: "ADD_FILTER";
  payload: number | number[];
}

export interface ActionDeleteFilter {
  type: "DELETE_FILTER";
  payload: number | number[];
}

export type stopsFilterAction = ActionAddFilter | ActionDeleteFilter;

export interface TargetAction {
  type: "TARGET_FILTER";
  payload: number | null;
}

export type ticketsFilterAction = TargetAction;

export interface FetchSuccessAction {
  type: "FETCH_SUCCESS";
  payload: {
    tickets: ITicket[];
    stop: boolean;
  };
}

export interface FetchErrorAction {
  type: "FETCH_ERROR";
  payload: any;
}

export interface FetchingAction {
  type: "FETCHING";
}

export interface FilterByStopsAction {
  type: "FILTER_BY_STOPS";
  payload: number[];
}

export interface SortAction {
  type: "SORT";
  payload: number;
}

export interface GetSearchId {
  type: "GET_SEARCH_ID";
  payload: string;
}

export interface FetchSearchId {
  type: "FETCH_SEARCH_ID";
}

export interface AddLengthAction {
  type: "ADD_LENGTH";
}

export type ticketsAction =
  | FetchSuccessAction
  | FetchErrorAction
  | FetchingAction
  | FilterByStopsAction
  | SortAction
  | GetSearchId
  | FetchSearchId
  | AddLengthAction;
