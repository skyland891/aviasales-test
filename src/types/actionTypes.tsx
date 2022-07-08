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
  payload: ITicket[];
}

export interface FetchErrorAction {
  type: "FETCH_ERROR";
  payload: any;
}

export interface FetchingAction {
  type: "FETCHING";
}

export type ticketsAction =
  | FetchSuccessAction
  | FetchErrorAction
  | FetchingAction;
