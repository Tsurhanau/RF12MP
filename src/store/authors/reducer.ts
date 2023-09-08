import { Author } from 'src/shared/models/author';
import { Action } from './action.interfaces';
import { ActionTypes } from './types';
import { CustomEntityState } from 'src/shared/models/entity-state';

interface AuthorsState extends CustomEntityState {
	authors: Author[];
}

const initialState: AuthorsState = {
	authors: [],
	isLoading: false,
	error: '',
};

export const authorsReducer = (
	state: AuthorsState = initialState,
	action: Action
): AuthorsState => {
	switch (action.type) {
		case ActionTypes.CREATE_AUTHOR:
			return {
				...state,
				isLoading: true,
			};
		case ActionTypes.CREATE_AUTHORS_SUCCESS:
			return {
				...state,
				authors: [...state.authors, action.payload.author],
				isLoading: false,
			};
		case ActionTypes.CREATE_AUTHORS_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload.error,
			};
		case ActionTypes.DELETE_AUTHOR:
			return {
				...state,
				authors: state.authors.filter(
					(author) => author.id !== action.payload.id
				),
			};
		case ActionTypes.LOAD_AUTHORS:
			return {
				...state,
				authors: action.payload.authors,
			};
		case ActionTypes.FETCH_AUTHORS:
			return {
				...state,
				isLoading: true,
			};
		case ActionTypes.FETCH_AUTHORS_SUCCESS:
			return {
				...state,
				authors: action.payload.authors,
				isLoading: false,
			};
		case ActionTypes.FETCH_AUTHORS_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload.error,
			};
		default:
			return state;
	}
};
