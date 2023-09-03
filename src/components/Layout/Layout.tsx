import './Layout.scss';
import { FC, ReactElement, useEffect } from 'react';
import { Header } from '../Header/Header';
import { LayoutProps } from 'src/shared/models/layout';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'src/shared/enums/router';
import { user } from 'src/assets/mocks/user';

export const Layout: FC<LayoutProps> = ({ children }): ReactElement => {
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			navigate(RoutePath.Login, { replace: true });
			user.isLogin = false;
		}
	}, []);

	return (
		<div className='layout'>
			<Header user={user} />
			<main className='layout__content'>{children}</main>
		</div>
	);
};
