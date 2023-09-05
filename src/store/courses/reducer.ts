import { Course } from 'src/shared/models/course';
import { Action } from './actions';
import { ActionTypes } from './types';

interface CoursesState {
	courses: Course[];
}

const initialState: CoursesState = {
	courses: [],
};

export const coursesReducer = (
	state: CoursesState = initialState,
	action: Action
): CoursesState => {
	switch (action.type) {
		case ActionTypes.ADD_COURSE:
			return {
				...state,
				courses: [...state.courses, action.payload.course],
			};
		case ActionTypes.DELETE_COURSE:
			return {
				...state,
				courses: state.courses.filter(
					(course) => course.id !== action.payload.id
				),
			};
		case ActionTypes.LOAD_COURSE:
			return {
				...state,
				courses: action.payload.courses,
			};
		default:
			return state;
	}
};
