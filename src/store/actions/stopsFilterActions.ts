import { ActionAddFilter, ActionDeleteFilter } from "../../types/actionTypes";

export const addStopFilter = (payload: number | number[]): ActionAddFilter => ({
  type: "ADD_FILTER",
  payload,
});

export const deleteStopFilter = (
  payload: number | number[]
): ActionDeleteFilter => ({ type: "DELETE_FILTER", payload });
