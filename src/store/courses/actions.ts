import { Course } from 'src/shared/models/course';
import { ActionTypes } from './types';
import {
	CreateCourseAction,
	CreateCourseFailureAction,
	CreateCourseSuccessAction,
	DeleteCourseAction,
	DeleteCourseFailureAction,
	DeleteCourseSuccessAction,
	FetchCoursesAction,
	FetchCoursesFailureAction,
	FetchCoursesSuccessAction,
	LoadCoursesAction,
	UpdateCoursesAction,
	UpdateCoursesFailureAction,
	UpdateCoursesSuccessAction,
} from './actions.interfaces';

export const loadCourses = (courses: Course[]): LoadCoursesAction => {
	return {
		type: ActionTypes.LOAD_COURSE,
		payload: { courses: courses },
	};
};

export const createCourse = (): CreateCourseAction => {
	return {
		type: ActionTypes.CREATE_COURSE,
	};
};

export const createCourseSuccess = (
	course: Course
): CreateCourseSuccessAction => {
	return {
		type: ActionTypes.CREATE_COURSE_SUCCESS,
		payload: { course: course },
	};
};

export const createCourseFailure = (
	error: string
): CreateCourseFailureAction => {
	return {
		type: ActionTypes.CREATE_COURSE_FAILURE,
		payload: { error: error },
	};
};

export const deleteCourse = (): DeleteCourseAction => {
	return {
		type: ActionTypes.DELETE_COURSE,
	};
};

export const deleteCourseSuccess = (id: string): DeleteCourseSuccessAction => {
	return {
		type: ActionTypes.DELETE_COURSE_SUCCESS,
		payload: { id: id },
	};
};

export const deleteCourseFailure = (
	error: string
): DeleteCourseFailureAction => {
	return {
		type: ActionTypes.DELETE_COURSE_FAILURE,
		payload: { error: error },
	};
};

export const fetchCourses = (): FetchCoursesAction => {
	return {
		type: ActionTypes.FETCH_COURSES,
	};
};

export const fetchCoursesSuccess = (
	courses: Course[]
): FetchCoursesSuccessAction => {
	return {
		type: ActionTypes.FETCH_COURSES_SUCCESS,
		payload: { courses: courses },
	};
};

export const fetchCoursesFailure = (
	error: string
): FetchCoursesFailureAction => {
	return {
		type: ActionTypes.FETCH_COURSES_FAILURE,
		payload: { error: error },
	};
};

export const updateCourse = (): UpdateCoursesAction => {
	return {
		type: ActionTypes.UPDATE_COURSE,
	};
};

export const updateCoursesSuccess = (
	course: Course
): UpdateCoursesSuccessAction => {
	return {
		type: ActionTypes.UPDATE_COURSE_SUCCESS,
		payload: { course: course },
	};
};

export const updateCoursesFailure = (
	error: string
): UpdateCoursesFailureAction => {
	return {
		type: ActionTypes.UPDATE_COURSE_FAILURE,
		payload: { error: error },
	};
};
