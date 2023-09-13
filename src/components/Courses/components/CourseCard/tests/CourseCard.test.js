import { Provider, useSelector as useSelectorMock } from 'react-redux';
import { mockedStore, mockedState } from 'src/assets/mocks/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { getCourseDuration } from 'src/helpers/getCourseDuration';
import { getCourseAuthors } from 'src/helpers/getCourseAuthors';
import { render, screen } from '@testing-library/react';
import { CourseCard } from '../CourseCard';
import { mockedCoursesList } from 'src/assets/mocks/courses';
import { getCourseCreationDate } from 'src/helpers/getCourseCreationDate';

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useSelector: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: jest.fn(),
}));

const mockCard = {
	card: mockedCoursesList[0],
	openCardInfo: jest.fn(),
};

describe('CourseCard Component', () => {
	beforeEach(() => {
		useSelectorMock.mockReturnValue(mockedState.user);

		render(
			<Provider store={mockedStore}>
				<Router>
					<CourseCard
						card={mockCard.card}
						authors={mockedState.authors}
						openCardInfo={mockCard.openCardInfo}
					/>
				</Router>
			</Provider>
		);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('renders the course title', () => {
		const titleElement = screen.getByText(mockCard.card.title);
		expect(titleElement).toBeInTheDocument();
	});

	it('renders the course description', () => {
		const descriptionElement = screen.getByTestId('course-description');
		expect(descriptionElement).toBeInTheDocument();
	});

	it('renders the course duration in the correct format', () => {
		const duration = getCourseDuration(mockCard.card.duration);

		const durationValue = `Duration: ${duration}`;

		const durationElement = screen.getByText(durationValue);
		expect(durationElement).toBeInTheDocument();
	});

	it('renders the course authors list', () => {
		const authors = getCourseAuthors(
			mockCard.card.authors,
			mockedState.authors
		);

		const authorsValue = `Authors: ${authors}`;

		const authorsElement = screen.getByText(authorsValue);
		expect(authorsElement).toBeInTheDocument();
	});

	it('renders the course creation date in the correct format', () => {
		const creationDate = getCourseCreationDate(mockCard.card.creationDate);

		const creationDateValue = `Created: ${creationDate}`;
		const creationDateElement = screen.getByText(creationDateValue);
		expect(creationDateElement).toBeInTheDocument();
	});
});
