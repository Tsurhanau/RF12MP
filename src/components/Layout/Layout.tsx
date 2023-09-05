import './Layout.scss';
import { FC, ReactElement, useEffect } from 'react';
import { Header } from '../Header/Header';
import { LayoutProps } from 'src/shared/models/layout';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'src/shared/enums/router';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'src/store/user/selectors';
import { logout } from 'src/store/user/actions';

export const Layout: FC<LayoutProps> = ({ children }): ReactElement => {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const user = useSelector(getUser);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			navigate(RoutePath.Login, { replace: true });
			dispatch(logout());
		}
	}, []);

	return (
		<div className='layout'>
			<Header user={user} />
			<main className='layout__content'>{children}</main>
		</div>
	);
};
