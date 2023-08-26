import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { mockedCoursesList } from './assets/mocks/courses';
import { Registration } from './components/Registration/Registration';
import { Course } from './shared/models/course';
import { Layout } from './components/Layout/Layout';
import { Courses } from './components/Courses/Courses';
import { Login } from './components/Login/Login';
import { RoutePath } from './shared/enums/router';
import { CourseInfo } from './components/Courses/components/CourseInfo/CourseInfo';
import { CreateCourse } from './components/Courses/components/CreateCourse/CreateCourse';

export const App = () => {
	const coursesList: Course[] = mockedCoursesList;

	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route
						path={RoutePath.Courses}
						element={<Courses courses={coursesList} />}
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
