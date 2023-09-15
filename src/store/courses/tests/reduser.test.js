import { coursesReducer } from '../reducer';
import { ActionTypes } from '../types';

describe('coursesReducer', () => {
	it('should return the initial state', () => {
		const initialState = {
			courses: [],
			isLoading: false,
			error: '',
		};

		const newState = coursesReducer(undefined, { type: 'UNKNOWN_ACTION' });

		expect(newState).toEqual(initialState);
	});

	it('should handle CREATE_COURSE action and return new state', () => {
		const initialState = {
			courses: [],
			isLoading: false,
			error: '',
		};

		const action = {
			type: ActionTypes.CREATE_COURSE,
		};

		const expectedState = {
			courses: [],
			isLoading: true,
			error: '',
		};

		const newState = coursesReducer(initialState, action);

		expect(newState).toEqual(expectedState);
	});

	it('should handle CREATE_COURSE_SUCCESS action and return new state', () => {
		const initialState = {
			courses: [],
			isLoading: true,
			error: '',
		};

		const action = {
			type: ActionTypes.CREATE_COURSE_SUCCESS,
			payload: {
				course: { id: '1', title: 'New Course' },
			},
		};

		const expectedState = {
			courses: [{ id: '1', title: 'New Course' }],
			isLoading: false,
			error: '',
		};

		const newState = coursesReducer(initialState, action);

		expect(newState).toEqual(expectedState);
	});

	it('should handle CREATE_COURSE_FAILURE action and return new state', () => {
		const initialState = {
			courses: [],
			isLoading: true,
			error: '',
		};

		const action = {
			type: ActionTypes.CREATE_COURSE_FAILURE,
			payload: {
				error: 'Failed to create course',
			},
		};

		const expectedState = {
			courses: [],
			isLoading: false,
			error: 'Failed to create course',
		};

		const newState = coursesReducer(initialState, action);

		expect(newState).toEqual(expectedState);
	});
});
