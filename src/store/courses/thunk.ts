import { Dispatch } from 'redux';
import { fetchUser } from '../user/actions';
import {
	createCourseAPI,
	deleteCourseAPI,
	fetchCoursesAPI,
	updateCourseAPI,
} from 'src/services/coursesService';
import {
	createCourse,
	createCourseFailure,
	createCourseSuccess,
	deleteCourse,
	deleteCourseFailure,
	deleteCourseSuccess,
	fetchCoursesFailure,
	fetchCoursesSuccess,
	updateCourse,
	updateCoursesFailure,
	updateCoursesSuccess,
} from './actions';
import { Course } from 'src/shared/models/course';

export const getCoursesAsync = () => {
	return async (dispatch: Dispatch) => {
		dispatch(fetchUser());
		fetchCoursesAPI()
			.then((response) => {
				dispatch(fetchCoursesSuccess(response.data.result));
			})
			.catch(() => {
				dispatch(fetchCoursesFailure('Error fetching user'));
			});
	};
};

export const deleteCourseAsync = (id: string) => {
	return async (dispatch: Dispatch) => {
		dispatch(deleteCourse());
		deleteCourseAPI(id)
			.then(() => {
				dispatch(deleteCourseSuccess(id));
			})
			.catch(() => {
				dispatch(deleteCourseFailure('Error logout user'));
			});
	};
};

export const createCourseAsync = (course: Course) => {
	return async (dispatch: Dispatch) => {
		dispatch(createCourse());
		createCourseAPI(course)
			.then(() => {
				dispatch(createCourseSuccess(course));
			})
			.catch(() => {
				dispatch(createCourseFailure('Error logout user'));
			});
	};
};

export const updateCourseAsync = (id: string, course: Course) => {
	return async (dispatch: Dispatch) => {
		dispatch(updateCourse());
		updateCourseAPI(id, course)
			.then((res) => {
				dispatch(updateCoursesSuccess(res.data));
			})
			.catch(() => {
				dispatch(updateCoursesFailure('Error logout user'));
			});
	};
};
