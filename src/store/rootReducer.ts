import { combineReducers } from '@reduxjs/toolkit';
import { coursesReducer } from './courses/reducer';
import { authorsReducer } from './authors/reducer';
import { userReducer } from './user/reducer';

export type RootState = {
	courses: ReturnType<typeof coursesReducer>;
	authors: ReturnType<typeof authorsReducer>;
	user: ReturnType<typeof userReducer>;
};

export const rootReducer = combineReducers({
	courses: coursesReducer,
	authors: authorsReducer,
	user: userReducer,
});
