import { Author } from 'src/shared/models/author';
import { ActionTypes } from './types';

interface LoadAuthorsAction {
	type: ActionTypes.LOAD_AUTHORS;
	payload: { authors: Author[] };
}

export const loadAuthors = (authors: Author[]) => {
	return {
		type: ActionTypes.LOAD_AUTHORS,
		payload: { authors: authors },
	};
};

interface AddAuthorAction {
	type: ActionTypes.ADD_AUTHOR;
	payload: { author: Author };
}

export const addAuthor = (author: Author) => {
	return {
		type: ActionTypes.ADD_AUTHOR,
		payload: { author: author },
	};
};

interface RemoveAuthorAction {
	type: ActionTypes.DELETE_AUTHOR;
	payload: { id: string };
}

export const removeAuthor = (id: string): RemoveAuthorAction => {
	return {
		type: ActionTypes.DELETE_AUTHOR,
		payload: { id: id },
	};
};

export type Action = AddAuthorAction | RemoveAuthorAction | LoadAuthorsAction;
