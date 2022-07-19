import { ticketsFilterAction } from "../../types/actionTypes";

export interface ticketsFilterState {
  targetId: number | null;
}

const initialState: ticketsFilterState = {
  targetId: 3,
};

const TARGET_FILTER = "TARGET_FILTER";

export const ticketsFilterReducer = (
  state = initialState,
  action: ticketsFilterAction
) => {
  switch (action.type) {
    case TARGET_FILTER:
      return { targetId: action.payload };
    default:
      return state;
  }
};
