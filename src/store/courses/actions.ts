import { Course } from 'src/shared/models/course';
import { ActionTypes } from './types';

interface LoadCoursesAction {
	type: ActionTypes.LOAD_COURSE;
	payload: { courses: Course[] };
}

export const loadCourses = (courses: Course[]): LoadCoursesAction => {
	return {
		type: ActionTypes.LOAD_COURSE,
		payload: { courses: courses },
	};
};

interface AddCourseAction {
	type: ActionTypes.ADD_COURSE;
	payload: { course: Course };
}

export const addCourse = (course: Course): AddCourseAction => {
	return {
		type: ActionTypes.ADD_COURSE,
		payload: { course: course },
	};
};

interface RemoveCourseAction {
	type: ActionTypes.DELETE_COURSE;
	payload: { id: string };
}

export const removeCourses = (id: string): RemoveCourseAction => {
	return {
		type: ActionTypes.DELETE_COURSE,
		payload: { id: id },
	};
};

export type Action = AddCourseAction | RemoveCourseAction | LoadCoursesAction;
