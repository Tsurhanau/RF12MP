import { Author } from 'src/shared/models/author';
import { Action } from './actions';
import { ActionTypes } from './types';

interface AuthorsState {
	authors: Author[];
}

const initialState: AuthorsState = {
	authors: [],
};

export const authorsReducer = (
	state: AuthorsState = initialState,
	action: Action
): AuthorsState => {
	switch (action.type) {
		case ActionTypes.ADD_AUTHOR:
			console.log('work ADD_AUTHOR', action.payload.author);
			return {
				...state,
				authors: [...state.authors, action.payload.author],
			};
		case ActionTypes.DELETE_AUTHOR:
			return {
				...state,
				authors: state.authors.filter(
					(author) => author.id !== action.payload.id
				),
			};
		case ActionTypes.LOAD_AUTHORS:
			console.log('work LOAD_AUTHORS', action.payload.authors);
			return {
				...state,
				authors: action.payload.authors,
			};
		default:
			return state;
	}
};
