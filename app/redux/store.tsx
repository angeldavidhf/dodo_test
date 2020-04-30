import {Action, applyMiddleware, combineReducers, compose, createStore,} from "redux";
import thunk, {ThunkMiddleware} from "redux-thunk";

import { userReducer, UserState } from "./users/reducer";

const rootReducer = combineReducers({
  user: userReducer,
});


interface rootState extends
  UserState
{}

export interface DispatchAction extends Action {
  payload: rootState;
}

const middleware = thunk as ThunkMiddleware<rootState, DispatchAction>;


export default createStore(
  rootReducer,
  compose(applyMiddleware(middleware))
);
