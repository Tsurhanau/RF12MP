import { FC, ReactElement } from 'react';
import './EmptyCourseList.scss';
import { Button } from 'src/common/Button/Button';
import { BUTTON_TEXT } from 'src/shared/constants/button';
import { EMPTY_LIST } from 'src/shared/constants/empty-list';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'src/shared/enums/router';
import { useSelector } from 'react-redux';
import { getUser } from 'src/store/user/selectors';

export const EmptyCourseList: FC = (): ReactElement => {
	const navigate = useNavigate();

	const user = useSelector(getUser);

	const addNewCourse = (): void => {
		navigate(`${RoutePath.Courses}/add`);
	};

	const renderAddNewCourseSection = (): ReactElement => {
		return (
			<>
				<p className='course-empty__message'>{EMPTY_LIST.MESSAGE}</p>
				<Button text={BUTTON_TEXT.ADD_NEW_COURSE} onClick={addNewCourse} />
			</>
		);
	};

	const renderRestrictMessageSection = (): ReactElement => {
		return (
			<>
				<p className='course-empty__message'>{EMPTY_LIST.RESTRICT_MESSAGE}</p>
			</>
		);
	};

	return (
		<div className='course-empty'>
			<h4 className='course-empty__title'>{EMPTY_LIST.TITLE}</h4>
			{user.isAdmin
				? renderAddNewCourseSection()
				: renderRestrictMessageSection()}
		</div>
	);
};
