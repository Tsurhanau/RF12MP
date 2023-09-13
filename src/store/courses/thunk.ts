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
import { CourseRequest } from 'src/shared/models/course';

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

export const createCourseAsync = (course: CourseRequest) => {
	return async (dispatch: Dispatch) => {
		dispatch(createCourse());
		createCourseAPI(course)
			.then((res) => {
				dispatch(createCourseSuccess(res.data.result));
			})
			.catch(() => {
				dispatch(createCourseFailure('Error logout user'));
			});
	};
};

export const updateCourseAsync = (id: string, course: CourseRequest) => {
	return async (dispatch: Dispatch) => {
		dispatch(updateCourse());
		updateCourseAPI(id, course)
			.then((res) => {
				dispatch(updateCoursesSuccess(res.data.result));
			})
			.catch(() => {
				dispatch(updateCoursesFailure('Error logout user'));
			});
	};
};
