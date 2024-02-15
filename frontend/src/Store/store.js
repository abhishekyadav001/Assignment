import { legacy_createStore, combineReducers, compose, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { userReducer } from "../Store/users/reducer";
const rootReducer = combineReducers({
  auth: userReducer,
});

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(rootReducer, composer(applyMiddleware(thunk)));
export default store;
