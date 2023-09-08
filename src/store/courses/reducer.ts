import { Course } from 'src/shared/models/course';
import { Action } from './actions.interfaces';
import { ActionTypes } from './types';
import { CustomEntityState } from 'src/shared/models/entity-state';

interface CoursesState extends CustomEntityState {
	courses: Course[];
}

const initialState: CoursesState = {
	courses: [],
	isLoading: false,
	error: '',
};

export const coursesReducer = (
	state: CoursesState = initialState,
	action: Action
): CoursesState => {
	switch (action.type) {
		case ActionTypes.CREATE_COURSE:
			return {
				...state,
				isLoading: true,
			};

		case ActionTypes.CREATE_COURSE_SUCCESS:
			return {
				...state,
				courses: [...state.courses, action.payload.course],
				isLoading: false,
			};
		case ActionTypes.CREATE_COURSE_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload.error,
			};
		case ActionTypes.DELETE_COURSE:
			return {
				...state,
				isLoading: true,
			};
		case ActionTypes.DELETE_COURSE_SUCCESS:
			return {
				...state,
				courses: state.courses.filter(
					(course) => course.id !== action.payload.id
				),
				isLoading: false,
			};
		case ActionTypes.DELETE_COURSE_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload.error,
			};
		case ActionTypes.LOAD_COURSE:
			return {
				...state,
				courses: action.payload.courses,
			};
		case ActionTypes.FETCH_COURSES:
			return {
				...state,
				isLoading: true,
			};
		case ActionTypes.FETCH_COURSES_SUCCESS:
			return {
				...state,
				courses: action.payload.courses,
				isLoading: false,
			};
		case ActionTypes.FETCH_COURSES_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload.error,
			};
		case ActionTypes.UPDATE_COURSE:
			return {
				...state,
				isLoading: true,
			};
		case ActionTypes.UPDATE_COURSE_SUCCESS:
			return {
				...state,
				courses: action.payload.courses,
				isLoading: false,
			};
		case ActionTypes.UPDATE_COURSE_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload.error,
			};
		default:
			return state;
	}
};
