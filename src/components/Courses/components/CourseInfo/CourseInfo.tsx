import { getCourseDuration } from 'src/helpers/getCourseDuration';
import './CourseInfo.scss';
import { CourseInfoProps } from 'src/shared/models/course';
import { getCourseCreationDate } from 'src/helpers/getCourseCreationDate';
import { getCourseAuthors } from 'src/helpers/getCourseAuthors';
import { Button } from 'src/common/Button/Button';
import { BUTTON_TEXT } from 'src/shared/constants/button';
import { FC, ReactElement } from 'react';

export const CourseInfo: FC<CourseInfoProps> = ({
	selectedCourse,
	moveBack,
}: CourseInfoProps): ReactElement => {
	const clickBack = (): void => {
		moveBack();
	};

	return (
		<div className='course-info'>
			<h3 className='course-info__title'>{selectedCourse.title}</h3>
			<div className='course-info__container'>
				<div className='course-info__section-1'>
					<h4>Description</h4>
					<p className='course-info__text'>{selectedCourse.description}</p>
				</div>
				<ul className='course-info__section-2'>
					<li>Id: {selectedCourse.id}</li>
					<li>Duration: {getCourseDuration(selectedCourse.duration)}</li>
					<li>Created: {getCourseCreationDate(selectedCourse.creationDate)}</li>
					<li>Authors: {getCourseAuthors(selectedCourse.authors)}</li>
				</ul>
			</div>
			<div className='course-info__button'>
				<Button text={BUTTON_TEXT.BACK} onClick={clickBack} />
			</div>
		</div>
	);
};
