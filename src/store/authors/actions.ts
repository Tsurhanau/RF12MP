import { Author } from 'src/shared/models/author';
import { ActionTypes } from './types';
import {
	CreateAuthorAction,
	CreateAuthorFailureAction,
	CreateAuthorSuccessAction,
	FetchAuthorsAction,
	FetchAuthorsFailureAction,
	FetchAuthorsSuccessAction,
	LoadAuthorsAction,
	RemoveAuthorAction,
} from './action.interfaces';

export const loadAuthors = (authors: Author[]): LoadAuthorsAction => {
	return {
		type: ActionTypes.LOAD_AUTHORS,
		payload: { authors: authors },
	};
};

export const createAuthor = (): CreateAuthorAction => {
	return {
		type: ActionTypes.CREATE_AUTHOR,
	};
};

export const createAuthorSuccess = (
	author: Author
): CreateAuthorSuccessAction => {
	return {
		type: ActionTypes.CREATE_AUTHORS_SUCCESS,
		payload: { author: author },
	};
};

export const createAuthorFailure = (
	error: string
): CreateAuthorFailureAction => {
	return {
		type: ActionTypes.CREATE_AUTHORS_FAILURE,
		payload: { error: error },
	};
};

export const removeAuthor = (id: string): RemoveAuthorAction => {
	return {
		type: ActionTypes.DELETE_AUTHOR,
		payload: { id: id },
	};
};

export const fetchAuthors = (): FetchAuthorsAction => {
	return {
		type: ActionTypes.FETCH_AUTHORS,
	};
};

export const fetchAuthorsSuccess = (
	authors: Author[]
): FetchAuthorsSuccessAction => {
	return {
		type: ActionTypes.FETCH_AUTHORS_SUCCESS,
		payload: { authors: authors },
	};
};

export const fetchAuthorsFailure = (
	error: string
): FetchAuthorsFailureAction => {
	return {
		type: ActionTypes.FETCH_AUTHORS_FAILURE,
		payload: { error: error },
	};
};
