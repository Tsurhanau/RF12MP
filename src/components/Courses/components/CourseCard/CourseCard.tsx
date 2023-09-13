import './CourseCard.scss';
import { Button } from 'src/common/Button/Button';
import { BUTTON_TEXT } from 'src/shared/constants/button';
import { CourseCardProps } from 'src/shared/models/course';
import { getCourseDuration } from 'src/helpers/getCourseDuration';
import { getCourseAuthors } from 'src/helpers/getCourseAuthors';
import { getCourseCreationDate } from 'src/helpers/getCourseCreationDate';
import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { getAuthors } from 'src/store/authors/selectors';
import { getUser } from 'src/store/user/selectors';
import { useAppDispatch } from 'src/hooks/dispatch';
import { deleteCourseAsync } from 'src/store/courses/thunk';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'src/shared/enums/router';

export const CourseCard: FC<CourseCardProps> = ({
	card,
	openCardInfo,
	authors,
}: CourseCardProps): ReactElement => {
	const user = useSelector(getUser);

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const showCourse = (): void => {
		openCardInfo(card);
	};

	const editCourse = (): void => {
		navigate(`${RoutePath.Courses}/update/${card.id}`);
	};

	const deleteCourse = (): void => {
		dispatch(deleteCourseAsync(card.id));
	};

	return (
		<div className='card' data-testid='course-card'>
			<div className='card__title'>
				<h3>{card.title}</h3>
			</div>
			<div className='card__content'>
				<p className='card__text' data-testid='course-description'>
					{card.description}
				</p>
				<div className='card__section-1'>
					<ul className='card__info'>
						<li>Authors: {getCourseAuthors(card.authors, authors)}</li>
						<li>Duration: {getCourseDuration(card.duration)}</li>
						<li>Created: {getCourseCreationDate(card.creationDate)}</li>
					</ul>
					<div className='card__buttons'>
						<Button text={BUTTON_TEXT.SHOW_COURSE} onClick={showCourse} />
						{user.isAdmin ? (
							<div>
								<Button text={BUTTON_TEXT.EDIT} onClick={editCourse} />
								<Button text={BUTTON_TEXT.DELETE} onClick={deleteCourse} />
							</div>
						) : (
							''
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
