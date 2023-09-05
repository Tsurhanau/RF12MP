import './CourseCard.scss';
import { Button } from 'src/common/Button/Button';
import { BUTTON_TEXT } from 'src/shared/constants/button';
import { CourseCardProps } from 'src/shared/models/course';
import { getCourseDuration } from 'src/helpers/getCourseDuration';
import { getCourseAuthors } from 'src/helpers/getCourseAuthors';
import { getCourseCreationDate } from 'src/helpers/getCourseCreationDate';
import { FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCourses } from 'src/store/courses/actions';
import { getAuthors } from 'src/store/authors/selectors';

export const CourseCard: FC<CourseCardProps> = ({
	card,
	openCardInfo,
}: CourseCardProps): ReactElement => {
	const authors = useSelector(getAuthors);

	const dispatch = useDispatch();

	const showCourse = (): void => {
		openCardInfo(card);
	};

	const editCourse = (): void => {
		console.log('editCourse');
	};

	const deleteCourse = (): void => {
		dispatch(removeCourses(card.id));
	};

	return (
		<div className='card'>
			<div className='card__title'>
				<h3>{card.title}</h3>
			</div>
			<div className='card__content'>
				<p className='card__text'>{card.description}</p>
				<div className='card__section-1'>
					<ul className='card__info'>
						<li>Authors: {getCourseAuthors(card.authors, authors)}</li>
						<li>Duration: {getCourseDuration(card.duration)}</li>
						<li>Created: {getCourseCreationDate(card.creationDate)}</li>
					</ul>
					<div className='card__buttons'>
						<Button text={BUTTON_TEXT.SHOW_COURSE} onClick={showCourse} />
						<Button text={BUTTON_TEXT.EDIT} onClick={editCourse} />
						<Button text={BUTTON_TEXT.DELETE} onClick={deleteCourse} />
					</div>
				</div>
			</div>
		</div>
	);
};
