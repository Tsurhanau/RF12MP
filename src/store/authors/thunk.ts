import { Dispatch } from 'redux';
import {
	createAuthor,
	createAuthorFailure,
	createAuthorSuccess,
	fetchAuthors,
	fetchAuthorsFailure,
	fetchAuthorsSuccess,
} from './actions';
import { createAuthorAPI, fetchAuthorsAPI } from 'src/services/authorsService';
import { Author } from 'src/shared/models/author';

export const getAuthorsAsync = () => {
	return async (dispatch: Dispatch) => {
		dispatch(fetchAuthors());
		fetchAuthorsAPI()
			.then((response) => {
				dispatch(fetchAuthorsSuccess(response.data.result));
			})
			.catch(() => {
				dispatch(fetchAuthorsFailure('Error fetching authors'));
			});
	};
};

export const createAuthorAsync = (author: Author) => {
	return async (dispatch: Dispatch) => {
		dispatch(createAuthor());
		createAuthorAPI(author)
			.then(() => {
				dispatch(createAuthorSuccess(author));
			})
			.catch(() => {
				dispatch(createAuthorFailure('Error create user'));
			});
	};
};
