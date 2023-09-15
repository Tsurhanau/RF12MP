import { URL_API } from 'src/shared/constants/http';
import { httpProvider } from './httpService';
import { CourseRequest } from 'src/shared/models/course';

export const fetchCoursesAPI = async () => {
	return httpProvider.get(`${URL_API}/courses/all`);
};

export const deleteCourseAPI = async (id: string) => {
	return httpProvider.delete(`${URL_API}/courses/${id}`);
};

export const createCourseAPI = async (course: CourseRequest) => {
	return httpProvider.post(`${URL_API}/courses/add`, course);
};

export const updateCourseAPI = async (id: string, course: CourseRequest) => {
	return httpProvider.put(`${URL_API}/courses/${id}`, course);
};
