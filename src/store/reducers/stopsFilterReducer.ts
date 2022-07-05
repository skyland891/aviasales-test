import { stopsFilterAction } from "../../types/actionTypes";

const ADD_FILTER = "ADD_FILTER";
const DELETE_FILTER = "DELETE_FILTER";

export interface stopsFilterState {
  stopsCount: number[];
}

const initialState: stopsFilterState = {
  stopsCount: [],
};

export const stopsFilterReducer = (
  state = initialState,
  action: stopsFilterAction
) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case ADD_FILTER:
      if (Array.isArray(action.payload)) {
        newState.stopsCount = action.payload;
      } else {
        newState.stopsCount.push(action.payload);
      }
      return newState;
    case DELETE_FILTER:
      if (Array.isArray(action.payload)) {
        newState.stopsCount = [];
      } else {
        newState.stopsCount = newState.stopsCount.filter(
          (stopCount: number) => stopCount !== action.payload
        );
      }
      return newState;
    default:
      return state;
  }
};
