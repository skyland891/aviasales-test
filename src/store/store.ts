import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import { stopsFilterReducer } from "./reducers/stopsFilterReducer";
import { ticketsFilterReducer } from "./reducers/ticketsFilterReducer";
import { ticketsReducer } from "./reducers/ticketsReducer";

const rootReducer = combineReducers({
  stopsFilterReducer,
  ticketsFilterReducer,
  ticketsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;
