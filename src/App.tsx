import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Registration } from './components/Registration/Registration';
import { Layout } from './components/Layout/Layout';
import { Courses } from './components/Courses/Courses';
import { Login } from './components/Login/Login';
import { RoutePath } from './shared/enums/router';
import { CourseInfo } from './components/Courses/components/CourseInfo/CourseInfo';
import { CourseForm } from './components/Courses/components/CourseForm/CourseForm';
import { useSelector } from 'react-redux';
import { getCourses } from './store/courses/selectors';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { useInitialDataFetching } from './hooks/useInitialDataFetching';

export const App = () => {
	const courses = useSelector(getCourses);

	useInitialDataFetching();

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
					<Route
						path={`${RoutePath.Courses}/add`}
						element={<PrivateRoute element={<CourseForm />} />}
					/>
					<Route
						path={`${RoutePath.Courses}/update/:courseId`}
						element={<PrivateRoute element={<CourseForm />} />}
					/>
					<Route path={RoutePath.Registration} element={<Registration />} />
					<Route path={RoutePath.Login} element={<Login />} />
					<Route path='*' element={<Navigate to={RoutePath.Courses} />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};
