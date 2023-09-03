import { getCourseDuration } from 'src/helpers/getCourseDuration';
import './CourseInfo.scss';
import { Course } from 'src/shared/models/course';
import { getCourseCreationDate } from 'src/helpers/getCourseCreationDate';
import { getCourseAuthors } from 'src/helpers/getCourseAuthors';
import { Button } from 'src/common/Button/Button';
import { BUTTON_TEXT } from 'src/shared/constants/button';
import { FC, ReactElement, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { mockedCoursesList } from 'src/assets/mocks/courses';
import { RoutePath } from 'src/shared/enums/router';
import { COURSES } from 'src/shared/constants/couses';

export const CourseInfo: FC = (): ReactElement => {
	const params = useParams();

	const navigate = useNavigate();

	const getCourseById = (id: string | undefined): Course | null => {
		if (!id) {
			return null;
		}
		return mockedCoursesList.find((course) => course.id === id) ?? null;
	};

	const [course, setCourse] = useState(getCourseById(params.courseId));

	const clickBack = (): void => {
		navigate(RoutePath.Courses);
	};

	return course ? (
		<div className='course-info'>
			<h3 className='course-info__title'>{course?.title}</h3>
			<div className='course-info__container'>
				<div className='course-info__section-1'>
					<h4>Description</h4>
					<p className='course-info__text'>{course?.description}</p>
				</div>
				<ul className='course-info__section-2'>
					<li>Id: {course.id}</li>
					<li>Duration: {getCourseDuration(course.duration)}</li>
					<li>Created: {getCourseCreationDate(course.creationDate)}</li>
					<li>Authors: {getCourseAuthors(course.authors)}</li>
				</ul>
			</div>
			<div className='course-info__button'>
				<Button text={BUTTON_TEXT.BACK} onClick={clickBack} />
			</div>
		</div>
	) : (
		<div className='course-info'>
			<h3 className='course-info__title'>{COURSES.NOT_FOUND}</h3>
		</div>
	);
};
