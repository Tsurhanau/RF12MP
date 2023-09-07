import { RootState } from '../rootReducer';

export const getAuthors = (state: RootState) => state.authors.authors;
