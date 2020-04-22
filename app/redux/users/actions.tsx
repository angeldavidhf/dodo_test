export const AddUserResponse = (data: IUser) => {
  return {
    type: USER_ACTION_TYPES.ADD_USER,
    payload: data
  }
}

export const GetUsersResponse = (data: IUsers[]) => {
  return {
    type: USER_ACTION_TYPES.GET_USERS,
    payload: data
  }
}

export const ErrorResponse = (message: string) => {
  return {
    type: USER_ACTION_TYPES.ERROR_REQUEST,
    message: message
  }
}

import { IUser, IUsers, USER_ACTION_TYPES } from "./types";
import axios from 'axios';
import { API } from '../../constants';


export const addUser = (newUser: IUser) => {
  return (dispatch: any) => {
    axios.post(API.ULR + 'user',{
      "name": newUser.name,
      "job": newUser.job
    })
    .then(response => {
      dispatch(AddUserResponse(response.data));
    })
    .catch(error => {
      dispatch(ErrorResponse(error.message))
    })
  }
}

export const getUsers = () => {
  return (dispatch: any) => {
    axios.get(API.ULR + 'user')
    .then((response) => {
      dispatch(GetUsersResponse(response.data));
    })
    .catch((error) => {
      dispatch(ErrorResponse(error))
    });
  }
}