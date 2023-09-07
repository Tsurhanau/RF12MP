import { Logo } from 'src/common/Logo/Logo';
import './Header.scss';
import { FC, ReactElement } from 'react';
import { Button } from 'src/common/Button/Button';
import { BUTTON_TEXT } from 'src/shared/constants/button';
import { HeaderProps } from 'src/shared/models/header';
import { useLocation, useNavigate } from 'react-router-dom';
import { RoutePath } from 'src/shared/enums/router';
import { useDispatch } from 'react-redux';
import { logout as userLogout } from 'src/store/user/actions';

export const Header: FC<HeaderProps> = ({ user }): ReactElement => {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const location = useLocation();

	const login = (): void => {
		navigate(RoutePath.Login, { replace: true });
	};

	const logout = (): void => {
		localStorage.removeItem('token');
		navigate(RoutePath.Login, { replace: true });

		dispatch(userLogout());
	};

	const renderNameSection = (): ReactElement => {
		return (
			<>
				<div className='heder__name'>{user.name}</div>
			</>
		);
	};

	const renderButtonSection = (): ReactElement => {
		return (
			<>
				{user.isLogin ? (
					<Button text={BUTTON_TEXT.LOGOUT} onClick={logout} />
				) : (
					<Button text={BUTTON_TEXT.LOGIN} onClick={login} />
				)}
			</>
		);
	};

	const isShowLogoutSection = (): boolean => {
		return (
			location.pathname !== RoutePath.Login &&
			location.pathname !== RoutePath.Registration
		);
	};

	return (
		<header className='header'>
			<div className='heder__logo'>
				<Logo />
			</div>
			{isShowLogoutSection() ? (
				<div className='header__login-section'>
					{user.isLogin ? renderNameSection() : null}
					<div className='heder__button'>{renderButtonSection()}</div>
				</div>
			) : null}
		</header>
	);
};
