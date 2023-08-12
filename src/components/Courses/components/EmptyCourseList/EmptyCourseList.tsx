import './EmptyCourseList.scss';
import { Button } from 'src/common/Button/Button';
import { BUTTON_TEXT } from 'src/shared/constants/button';
import { EMPTY_LIST } from 'src/shared/constants/empty-list';

export function EmptyCourseList(): JSX.Element {
	function addNewCourse(): void {
		console.log('addNewCourse');
	}

	return (
		<div className='course-empty'>
			<h4 className='course-empty__title'>{EMPTY_LIST.TITLE}</h4>
			<p className='course-empty__message'>{EMPTY_LIST.MESSAGE}</p>
			<Button text={BUTTON_TEXT.EMPTY_COURSES} onClick={addNewCourse} />
		</div>
	);
}
