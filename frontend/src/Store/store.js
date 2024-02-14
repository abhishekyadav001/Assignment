import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { userReducer } from "./users/reducer";

const rootReducer = combineReducers({
  auth: userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
