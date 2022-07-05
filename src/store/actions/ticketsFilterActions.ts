import { TargetAction } from "../../types/actionTypes";

export const targetFilter = (payload: number | null): TargetAction => {
  return {
    type: "TARGET_FILTER",
    payload,
  };
};
