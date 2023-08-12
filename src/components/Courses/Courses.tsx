import './Courses.scss';
import { CourseCard } from './components/CourseCard/CourseCard';
import { Course, CourseProps } from 'src/shared/models/course';
import { EmptyCourseList } from './components/EmptyCourseList/EmptyCourseList';
import { useState } from 'react';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { SearchBar } from 'src/common/SearchBar/SearchBar';

export function Courses({ courses }: CourseProps): JSX.Element {
	const [coursesList, setCoursesList] = useState(courses);
	const [showCourseInfo, setShowCourseInfo] = useState<boolean>(false);
	const [selectedCourse, setSelectedCourse] = useState<Course>();

	function openCourseInfo(card: Course): void {
		setShowCourseInfo(true);
		setSelectedCourse(card);
	}

	function closeCourseInfo(): void {
		setShowCourseInfo(false);
	}

	function onSubmitSearch(value: string): void {
		if (value) {
			const lowerCaseValue = value.toLocaleLowerCase();
			const result = courses.filter((course) => {
				return (
					course.title.toLocaleLowerCase().includes(lowerCaseValue) ||
					course.id.toLocaleLowerCase().includes(lowerCaseValue)
				);
			});

			setCoursesList(result);
		} else {
			setCoursesList(courses);
		}
	}

	function renderCourseList(): JSX.Element {
		if (courses.length === 0) {
			return (
				<div className='courses__empty-list'>
					<EmptyCourseList />
				</div>
			);
		}
		return (
			<div className='courses__container'>
				{coursesList.map((card: Course) => (
					<CourseCard key={card.id} card={card} openCardInfo={openCourseInfo} />
				))}
			</div>
		);
	}

	return (
		<div className='courses'>
			<div className='courses__section-1'>
				<SearchBar onSubmitSearch={onSubmitSearch} />
			</div>
			{showCourseInfo ? (
				<CourseInfo
					selectedCourse={selectedCourse!}
					moveBack={closeCourseInfo}
				/>
			) : (
				renderCourseList()
			)}
		</div>
	);
}
