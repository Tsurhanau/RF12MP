import {
	fetchUser,
	fetchUserFailure,
	fetchUserSuccess,
	logout,
	logoutUserFailure,
	logoutUserSuccess,
} from './actions';
import { Dispatch } from 'redux';
import { fetchUserAPI, logoutUserAPI } from 'src/services/userService';

export const getUserAsync = () => {
	return async (dispatch: Dispatch) => {
		dispatch(fetchUser());

		fetchUserAPI()
			.then((response) => {
				dispatch(fetchUserSuccess(response.data.result));
			})
			.catch(() => {
				dispatch(fetchUserFailure('Error fetching user'));
			});
	};
};

export const logoutUserAsync = () => {
	return async (dispatch: Dispatch) => {
		dispatch(logout());
		logoutUserAPI()
			.then(() => {
				dispatch(logoutUserSuccess());
			})
			.catch(() => {
				dispatch(logoutUserFailure('Error logout user'));
			});
	};
};
