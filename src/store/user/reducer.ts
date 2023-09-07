import { User } from 'src/shared/models/user';
import { Action } from './actions';
import { ActionTypes } from './types';

interface UserState {
	user: User;
}

const initialState: UserState = {
	user: {
		name: 'Harry Potter',
		isAdmin: false,
		isLogin: false,
		email: '',
		token: '',
	},
};

export const userReducer = (
	state: UserState = initialState,
	action: Action
): UserState => {
	switch (action.type) {
		case ActionTypes.ADD_USER:
			return {
				...state,
				user: action.payload.user,
			};

		case ActionTypes.LOGOUT:
			return {
				...state,
				user: {
					...state.user,
					isLogin: false,
				},
			};
		default:
			return state;
	}
};
