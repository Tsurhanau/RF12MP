import { User } from 'src/shared/models/user';
import { ActionTypes } from './types';
import {
	AddUserAction,
	FetchUserAction,
	FetchUserFailureAction,
	FetchUserSuccessAction,
	LogoutUserAction,
	LogoutUserFailureAction,
	LogoutUserSuccessAction,
} from './actions.interfaces';

export const addUser = (user: User): AddUserAction => {
	return {
		type: ActionTypes.ADD_USER,
		payload: { user: user },
	};
};

export const logout = (): LogoutUserAction => {
	return {
		type: ActionTypes.LOGOUT,
	};
};

export const logoutUserSuccess = (): LogoutUserSuccessAction => {
	return {
		type: ActionTypes.LOGOUT_SUCCESS,
	};
};

export const logoutUserFailure = (error: string): LogoutUserFailureAction => {
	return {
		type: ActionTypes.LOGOUT_FAILURE,
		payload: { error: error },
	};
};

export const fetchUser = (): FetchUserAction => {
	return {
		type: ActionTypes.FETCH_USER,
	};
};

export const fetchUserSuccess = (user: User): FetchUserSuccessAction => {
	return {
		type: ActionTypes.FETCH_USER_SUCCESS,
		payload: { user: user },
	};
};

export const fetchUserFailure = (error: string): FetchUserFailureAction => {
	return {
		type: ActionTypes.FETCH_USER_FAILURE,
		payload: { error: error },
	};
};
