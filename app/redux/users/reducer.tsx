import { Reducer } from "redux";
import { DispatchAction } from "../store";
import { USER_ACTION_tYPES } from './actions';

export interface User {
  name: string;
  job: string;
}
 
export interface UserState {
  users: [];
  user: {}
  message: string;
}

const initialState: UserState = {
  users: [],
  user: {},
  message: ''
}

export const userReducer: Reducer<UserState, DispatchAction> = (state: UserState = initialState, action) => {
  switch (action.type) {
    case USER_ACTION_tYPES.ADD_USER:
      return {
        ...state,
        user: action.payload || {}
      };
    case USER_ACTION_tYPES.GET_USERS:
      return {
        ...state,
        users: action.payload || []
      };
    case USER_ACTION_tYPES.ERROR:
      return {
        ...state,
        message: action.payload || ''
      };
    default:
      return state;
  }
};