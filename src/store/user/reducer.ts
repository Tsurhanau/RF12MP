import { User } from 'src/shared/models/user';
import { Action } from './actions.interfaces';
import { ActionTypes } from './types';
import { mapUser } from 'src/helpers/mapUser';
import { CustomEntityState } from 'src/shared/models/entity-state';

interface UserState extends CustomEntityState {
	user: User;
}

const initialState: UserState = {
	user: {
		name: 'Harry Potter',
		isAdmin: false,
		isLogin: false,
		email: '',
		role: '',
	},
	error: '',
	isLoading: false,
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
		case ActionTypes.LOGOUT_SUCCESS:
			return {
				...state,
				user: {
					...state.user,
					isLogin: false,
				},
				isLoading: false,
			};
		case ActionTypes.LOGOUT_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload.error,
			};
		case ActionTypes.FETCH_USER:
			return {
				...state,
				isLoading: true,
			};
		case ActionTypes.FETCH_USER_SUCCESS:
			return {
				...state,
				user: mapUser(state.user, action.payload.user),
				isLoading: false,
			};
		case ActionTypes.FETCH_USER_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload.error,
			};
		default:
			return state;
	}
};
