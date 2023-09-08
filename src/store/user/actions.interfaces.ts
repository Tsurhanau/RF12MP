import { User } from 'src/shared/models/user';
import { ActionTypes } from './types';

export interface AddUserAction {
	type: ActionTypes.ADD_USER;
	payload: { user: User };
}

export interface LogoutUserAction {
	type: ActionTypes.LOGOUT;
}

export interface LogoutUserSuccessAction {
	type: ActionTypes.LOGOUT_SUCCESS;
}

export interface LogoutUserFailureAction {
	type: ActionTypes.LOGOUT_FAILURE;
	payload: { error: string };
}

export interface FetchUserAction {
	type: ActionTypes.FETCH_USER;
}

export interface FetchUserSuccessAction {
	type: ActionTypes.FETCH_USER_SUCCESS;
	payload: { user: User };
}

export interface FetchUserFailureAction {
	type: ActionTypes.FETCH_USER_FAILURE;
	payload: { error: string };
}

export type Action =
	| AddUserAction
	| LogoutUserAction
	| FetchUserAction
	| FetchUserSuccessAction
	| FetchUserFailureAction
	| LogoutUserSuccessAction
	| LogoutUserFailureAction;
