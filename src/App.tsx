import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Registration } from './components/Registration/Registration';
import { Layout } from './components/Layout/Layout';
import { Courses } from './components/Courses/Courses';
import { Login } from './components/Login/Login';
import { RoutePath } from './shared/enums/router';
import { CourseInfo } from './components/Courses/components/CourseInfo/CourseInfo';
import { CreateCourse } from './components/Courses/components/CreateCourse/CreateCourse';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from './store/courses/selectors';
import { URL_API } from './shared/constants/http';
import { useEffect } from 'react';
import axios from 'axios';
import { loadCourses } from './store/courses/actions';
import { loadAuthors } from './store/authors/actions';

export const App = () => {
	const courses = useSelector(getCourses);

	const dispatch = useDispatch();

	useEffect(() => {
		axios
			.get(`${URL_API}/courses/all`)
			.then((response) => {
				dispatch(loadCourses(response.data.result));
			})
			.catch((error) => {
				console.error('Error fetching users:', error);
			});
	}, []);

	useEffect(() => {
		axios
			.get(`${URL_API}/authors/all`)
			.then((response) => {
				dispatch(loadAuthors(response.data.result));
			})
			.catch((error) => {
				console.error('Error fetching users:', error);
			});
	}, []);

	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route
						path={RoutePath.Courses}
						element={<Courses courses={courses} />}
					/>
					<Route
						path={`${RoutePath.Courses}/:courseId`}
						element={<CourseInfo />}
					/>
					<Route path={`${RoutePath.Courses}/add`} element={<CreateCourse />} />
					<Route path={RoutePath.Registration} element={<Registration />} />
					<Route path={RoutePath.Login} element={<Login />} />
					<Route path='*' element={<Navigate to={RoutePath.Courses} />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};
