import { URL_API } from 'src/shared/constants/http';
import { httpProvider } from './httpService';
import { Course } from 'src/shared/models/course';

export const fetchCoursesAPI = async () => {
	return httpProvider.get(`${URL_API}/courses/all`);
};

export const deleteCourseAPI = async (id: string) => {
	return httpProvider.delete(`${URL_API}/courses/${id}`);
};

export const createCourseAPI = async (course: Course) => {
	return httpProvider.post(`${URL_API}/courses/add`, course);
};

export const updateCourseAPI = async (id: string, course: Course) => {
	return httpProvider.put(`${URL_API}/courses/${id}`, course);
};
