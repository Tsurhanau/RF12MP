import { Author } from 'src/shared/models/author';
import { ActionTypes } from './types';

export interface LoadAuthorsAction {
	type: ActionTypes.LOAD_AUTHORS;
	payload: { authors: Author[] };
}

export interface CreateAuthorAction {
	type: ActionTypes.CREATE_AUTHOR;
}

export interface CreateAuthorSuccessAction {
	type: ActionTypes.CREATE_AUTHORS_SUCCESS;
	payload: { author: Author };
}

export interface CreateAuthorFailureAction {
	type: ActionTypes.CREATE_AUTHORS_FAILURE;
	payload: { error: string };
}

export interface RemoveAuthorAction {
	type: ActionTypes.DELETE_AUTHOR;
	payload: { id: string };
}

export interface FetchAuthorsAction {
	type: ActionTypes.FETCH_AUTHORS;
}

export interface FetchAuthorsSuccessAction {
	type: ActionTypes.FETCH_AUTHORS_SUCCESS;
	payload: { authors: Author[] };
}

export interface FetchAuthorsFailureAction {
	type: ActionTypes.FETCH_AUTHORS_FAILURE;
	payload: { error: string };
}

export type Action =
	| CreateAuthorAction
	| CreateAuthorSuccessAction
	| CreateAuthorFailureAction
	| RemoveAuthorAction
	| LoadAuthorsAction
	| FetchAuthorsAction
	| FetchAuthorsSuccessAction
	| FetchAuthorsFailureAction;
