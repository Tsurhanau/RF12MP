import { mockedAuthorsList } from './courses';

export const mockedState = {
	user: {
		isAuth: true,
		isAdmin: true,
		name: 'Test Name',
	},
	courses: [],
	authors: mockedAuthorsList,
};

export const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};
