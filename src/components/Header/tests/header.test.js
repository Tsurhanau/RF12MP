import { render } from '@testing-library/react';
import { Header } from '../Header';
import { Provider } from 'react-redux';
import { mockedStore } from 'src/assets/mocks/store';
import { mockedUser } from 'src/assets/mocks/user';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header Component', () => {
	let headerComponent;

	beforeEach(() => {
		headerComponent = render(
			<Provider store={mockedStore}>
				<Router>
					<Header user={mockedUser} />
				</Router>
			</Provider>
		);
	});

	it('should have user name when user is logged in', () => {
		const { getByText } = headerComponent;
		const nameElement = getByText('Harry Potter');
		expect(nameElement).toBeInTheDocument();
	});

	it('should have a logo image', () => {
		const { getByAltText } = headerComponent;
		const logoImage = getByAltText('courses logo');
		expect(logoImage).toBeInTheDocument();
	});
});
