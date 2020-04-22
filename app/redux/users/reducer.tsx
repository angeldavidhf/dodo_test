import { UserState, UserResponseTypes, USER_ACTION_TYPES } from './types';

const initialState: UserState = {
  users: [],
  user: {
    name: '',
    job: ''
  },
  message: ''
}

function userReducer(
    state: UserState = initialState,
    action: UserResponseTypes
  ): UserState {
    switch (action.type) {
      case USER_ACTION_TYPES.ADD_USER:
        return { 
          ...state, 
          user: action.payload 
        };
      case USER_ACTION_TYPES.GET_USERS:
        return { 
          ...state, 
          users: action.payload 
        };
      case USER_ACTION_TYPES.ERROR_REQUEST:
        return { 
          ...state, 
          message: action.message 
        };
      default:
        return state
    }
  }

export default userReducer