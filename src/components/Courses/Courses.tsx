import './Courses.scss';
import { CourseCard } from './components/CourseCard/CourseCard';
import { Course, CourseProps } from 'src/shared/models/course';
import { EmptyCourseList } from './components/EmptyCourseList/EmptyCourseList';
import { ReactElement, useEffect, useState } from 'react';
import { SearchBar } from 'src/common/SearchBar/SearchBar';
import { Button } from 'src/common/Button/Button';
import { BUTTON_TEXT } from 'src/shared/constants/button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'src/shared/enums/router';
import { useSelector } from 'react-redux';
import { getUserAsync } from 'src/store/user/thunk';
import { useAppDispatch } from 'src/hooks/dispatch';
import { getUser } from 'src/store/user/selectors';
import { getCoursesAsync } from 'src/store/courses/thunk';

export const Courses: React.FC<CourseProps> = ({
	courses,
	authors,
}: CourseProps): ReactElement => {
	const navigate = useNavigate();

	const user = useSelector(getUser);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getUserAsync());
		dispatch(getCoursesAsync());
	}, [dispatch]);

	const [filterCourses, setFilterCourses] = useState<Course[] | null>(null);

	const openCourseInfo = (card: Course): void => {
		navigate(`${RoutePath.Courses}/${card.id}`);
	};

	const onSubmitSearch = (value: string): void => {
		if (value) {
			const lowerCaseValue = value.toLocaleLowerCase();
			const result = courses?.filter((course: Course) => {
				return (
					course.title.toLocaleLowerCase().includes(lowerCaseValue) ||
					course.id.toLocaleLowerCase().includes(lowerCaseValue)
				);
			});

			setFilterCourses(result ?? null);
		} else {
			setFilterCourses(null);
		}
	};

	const renderCourseList = (): ReactElement => {
		return courses?.length === 0 ? (
			<div className='courses__empty-list'>
				<EmptyCourseList />
			</div>
		) : (
			<div className='courses__container'>
				{filterCourses
					? filterCourses?.map((card: Course) => (
							<CourseCard
								key={card.id}
								authors={authors}
								card={card}
								openCardInfo={openCourseInfo}
							/>
					  ))
					: courses?.map((card: Course) => (
							<CourseCard
								key={card.id}
								authors={authors}
								card={card}
								openCardInfo={openCourseInfo}
							/>
					  ))}
			</div>
		);
	};

	const addNewCourse = (): void => {
		navigate(`${RoutePath.Courses}/add`);
	};

	return (
		<div className='courses'>
			<div className='courses__section-1'>
				<SearchBar onSubmitSearch={onSubmitSearch} />
				{user.isAdmin ? (
					<Button
						text={BUTTON_TEXT.ADD_NEW_COURSE}
						testId='add-button'
						onClick={addNewCourse}
					/>
				) : (
					''
				)}
			</div>
			{renderCourseList()}
		</div>
	);
};
