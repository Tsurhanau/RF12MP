import './Courses.scss';
import { CourseCard } from './components/CourseCard/CourseCard';
import { Course, CourseProps } from 'src/shared/models/course';
import { EmptyCourseList } from './components/EmptyCourseList/EmptyCourseList';
import { ReactElement, useState } from 'react';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { SearchBar } from 'src/common/SearchBar/SearchBar';
import { Button } from 'src/common/Button/Button';
import { BUTTON_TEXT } from 'src/shared/constants/button';

export const Courses: React.FC<CourseProps> = ({
	courses,
}: CourseProps): ReactElement => {
	const [coursesList, setCoursesList] = useState(courses);
	const [showCourseInfo, setShowCourseInfo] = useState<boolean>(false);
	const [selectedCourse, setSelectedCourse] = useState<Course>();

	const openCourseInfo = (card: Course): void => {
		setShowCourseInfo(true);
		setSelectedCourse(card);
	};

	const closeCourseInfo = (): void => {
		setShowCourseInfo(false);
	};

	const onSubmitSearch = (value: string): void => {
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
	};

	const renderCourseList = (): ReactElement => {
		return courses.length === 0 ? (
			<div className='courses__empty-list'>
				<EmptyCourseList />
			</div>
		) : (
			<div className='courses__container'>
				{coursesList.map((card: Course) => (
					<CourseCard key={card.id} card={card} openCardInfo={openCourseInfo} />
				))}
			</div>
		);
	};

	const addNewCourse = () => console.log('addNewCourse');

	return (
		<div className='courses'>
			<div className='courses__section-1'>
				<SearchBar onSubmitSearch={onSubmitSearch} />
				<Button text={BUTTON_TEXT.ADD_NEW_COURSE} onClick={addNewCourse} />
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
};
