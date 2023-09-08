import { Course } from 'src/shared/models/course';
import { ActionTypes } from './types';

export interface LoadCoursesAction {
	type: ActionTypes.LOAD_COURSE;
	payload: { courses: Course[] };
}

export interface CreateCourseAction {
	type: ActionTypes.CREATE_COURSE;
}

export interface CreateCourseSuccessAction {
	type: ActionTypes.CREATE_COURSE_SUCCESS;
	payload: { course: Course };
}

export interface CreateCourseFailureAction {
	type: ActionTypes.CREATE_COURSE_FAILURE;
	payload: { error: string };
}

export interface DeleteCourseAction {
	type: ActionTypes.DELETE_COURSE;
}

export interface DeleteCourseSuccessAction {
	type: ActionTypes.DELETE_COURSE_SUCCESS;
	payload: { id: string };
}

export interface DeleteCourseFailureAction {
	type: ActionTypes.DELETE_COURSE_FAILURE;
	payload: { error: string };
}

export interface FetchCoursesAction {
	type: ActionTypes.FETCH_COURSES;
}

export interface FetchCoursesSuccessAction {
	type: ActionTypes.FETCH_COURSES_SUCCESS;
	payload: { courses: Course[] };
}

export interface FetchCoursesFailureAction {
	type: ActionTypes.FETCH_COURSES_FAILURE;
	payload: { error: string };
}

export interface UpdateCoursesAction {
	type: ActionTypes.UPDATE_COURSE;
}

export interface UpdateCoursesSuccessAction {
	type: ActionTypes.UPDATE_COURSE_SUCCESS;
	payload: { courses: Course[] };
}

export interface UpdateCoursesFailureAction {
	type: ActionTypes.UPDATE_COURSE_FAILURE;
	payload: { error: string };
}

export type Action =
	| CreateCourseAction
	| CreateCourseSuccessAction
	| CreateCourseFailureAction
	| LoadCoursesAction
	| FetchCoursesAction
	| FetchCoursesSuccessAction
	| FetchCoursesFailureAction
	| DeleteCourseAction
	| DeleteCourseSuccessAction
	| DeleteCourseFailureAction
	| UpdateCoursesAction
	| UpdateCoursesSuccessAction
	| UpdateCoursesFailureAction;
