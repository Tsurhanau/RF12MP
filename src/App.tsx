import './App.scss';
import { mockedCoursesList } from './assets/mocks/courses';
import { Courses } from './components/Courses/Courses';
import { Header } from './components/Header/Header';
import { Course } from './shared/models/course';

export const App = () => {
	const coursesList: Course[] = mockedCoursesList;

	return (
		<div className='app'>
			<div className='app__header'>
				<Header />
			</div>
			<div className='app__container'>
				<div className='app__courses'>
					<Courses courses={coursesList} />
				</div>
			</div>
		</div>
	);
};
