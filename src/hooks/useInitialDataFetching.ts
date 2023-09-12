import { useEffect } from 'react';
import { useAppDispatch } from './dispatch';
import { getCoursesAsync } from 'src/store/courses/thunk';
import { getAuthorsAsync } from 'src/store/authors/thunk';

export const useInitialDataFetching = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getCoursesAsync());
		dispatch(getAuthorsAsync());
	}, [dispatch]);
};
