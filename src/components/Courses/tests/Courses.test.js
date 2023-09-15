import {
	render,
	screen,
	fireEvent,
	waitFor,
	act,
} from '@testing-library/react';
import { Provider, useSelector as useSelectorMock } from 'react-redux';
import { mockedStore, mockedState } from 'src/assets/mocks/store';
import { mockedCoursesList } from 'src/assets/mocks/courses';
import {
	BrowserRouter as Router,
	useNavigate as useNavigateMock,
} from 'react-router-dom';
import { Courses } from '../Courses';
import { BUTTON_TEXT } from 'src/shared/constants/button';
import userEvent from '@testing-library/user-event';

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useSelector: jest.fn(),
}));

jest.mock('react-router-dom', () => {
	const originalModule = jest.requireActual('react-router-dom');
	return {
		...originalModule,
		useNavigate: jest.fn(),
	};
});

describe('Courses Component', () => {
	let coursesComponent;

	beforeEach(() => {
		useSelectorMock.mockReturnValue(mockedState.user);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('Courses should display amount of CourseCard equal to the length of courses array', () => {
		coursesComponent = render(
			<Provider store={mockedStore}>
				<Router>
					<Courses courses={mockedCoursesList} authors={mockedState.authors} />
				</Router>
			</Provider>
		);
		const cards = coursesComponent.queryAllByTestId('course-card');
		expect(cards.length).toBe(mockedCoursesList.length);
	});

	it('Courses should display amount of CourseCard equal to the length of courses array empty', () => {
		coursesComponent = render(
			<Provider store={mockedStore}>
				<Router>
					<Courses courses={[]} authors={mockedState.authors} />
				</Router>
			</Provider>
		);
		const cards = coursesComponent.queryAllByTestId('course-card');
		expect(cards.length).toBe(0);
	});

	it('CourseForm should be shown after a click on a button "Add new course"', async () => {
		const navigateMock = jest.fn();
		useNavigateMock.mockReturnValue(navigateMock);

		render(
			<Provider store={mockedStore}>
				<Courses courses={[]} authors={[]} />
			</Provider>
		);

		const buttonElement = screen.getByTestId('add-button');

		const spanElement = buttonElement.querySelector('span');

		expect(spanElement).toHaveTextContent(BUTTON_TEXT.ADD_NEW_COURSE);

		userEvent.click(buttonElement);

		await act(async () => {
			expect(navigateMock).toHaveBeenCalledWith('/courses/add');
		});
	});
});
