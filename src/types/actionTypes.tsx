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
