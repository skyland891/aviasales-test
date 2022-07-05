import { createStore, combineReducers } from "redux";
import { stopsFilterReducer } from "./reducers/stopsFilterReducer";
import { ticketsFilterReducer } from "./reducers/ticketsFilterReducer";

const rootReducer = combineReducers({
  stopsFilterReducer,
  ticketsFilterReducer,
});

const store = createStore(rootReducer);

export default store;
