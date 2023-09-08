import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RoutePath } from 'src/shared/enums/router';
import { getUser } from 'src/store/user/selectors';

export const PrivateRoute = ({
	element,
}: {
	element: ReactElement;
}): ReactElement => {
	const user = useSelector(getUser);

	return user.isAdmin ? (
		element
	) : (
		<Navigate to={RoutePath.Courses} replace={true} />
	);
};
