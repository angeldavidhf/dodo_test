import { ThunkAction } from "redux-thunk";
import { Action, Dispatch } from "redux";
import axios, { AxiosError } from "axios";
import { UserState, User } from "./reducer";

import { API } from '../../constants';

export enum USER_ACTION_tYPES {
  ADD_USER = "ADD_USER",
  GET_USERS = "GET_USERS",
  ERROR = "ERROR",
  LOADING = "LOADING"
}

export const addUser = (user: User): ThunkAction<void, UserState, null, Action<string>> => async dispatch => {
	axios
		.post(`${API.ULR}user`, {
      "name": user.name,
      "job": user.job
    })
		.then((response) => {
			dispatch({
				type: USER_ACTION_tYPES.ADD_USER,
				payload: response.data
      });
		})
		.catch((error: AxiosError) => {
			dispatch({
				type: USER_ACTION_tYPES.ERROR,
				payload: { message: `Error: ${error.response}` }
			});
		})
};

export const getUsers = (): ThunkAction<void, UserState, null, Action<string>> => async dispatch => {
	axios
		.get(`${API.ULR}users?page=2`)
		.then((response) => {
			dispatch({
				type: USER_ACTION_tYPES.GET_USERS,
				payload: response.data.data
      });
		})
		.catch((error: AxiosError) => {
			dispatch({
				type: USER_ACTION_tYPES.ERROR,
				payload: { message: `Error: ${error.response}` }
			});
		})
};