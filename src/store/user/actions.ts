import { User } from 'src/shared/models/user';
import { ActionTypes } from './types';

interface AddUserAction {
	type: ActionTypes.ADD_USER;
	payload: { user: User };
}

export const addUser = (user: User) => {
	return {
		type: ActionTypes.ADD_USER,
		payload: { user: user },
	};
};

interface LogoutUserAction {
	type: ActionTypes.LOGOUT;
}

export const logout = (): LogoutUserAction => {
	return {
		type: ActionTypes.LOGOUT,
	};
};

export type Action = AddUserAction | LogoutUserAction;
