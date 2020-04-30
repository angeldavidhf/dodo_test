export enum USER_ACTION_TYPES {
	ADD_USER = 'ADD_USER',
	GET_USERS = 'GET_USERS',
	ERROR_REQUEST = 'ERROR_REQUEST'
}

export interface IUser {
    name: string;
    job: string;
}

export interface IUsers {
	name: string;
	email: string;
	avatar: string;
}

export interface UserState {
	user: IUser;
	users: IUsers[];
	message: string;
}


interface AddUserResponse {
	type: typeof USER_ACTION_TYPES.ADD_USER;
	payload: IUser;
}

interface GetUsersResponse {
	type: typeof USER_ACTION_TYPES.GET_USERS;
	payload: IUsers[];
}

interface ErrorResponse {
	type: typeof USER_ACTION_TYPES.ERROR_REQUEST;
	message: string;
}

export type UserResponseTypes = AddUserResponse | GetUsersResponse | ErrorResponse;
