import { Logo } from 'src/common/Logo/Logo';
import './Header.scss';
import React from 'react';
import { Button } from 'src/common/Button/Button';
import { BUTTON_TEXT } from 'src/shared/constants/button';

export function Header(): JSX.Element {
	function login(): void {
		console.log('login event');
	}

	return (
		<header className='header'>
			<div className='heder__logo'>
				<Logo />
			</div>
			<div className='heder__login-button'>
				<Button text={BUTTON_TEXT.LOGIN} onClick={login} />
			</div>
		</header>
	);
}

export default Header;
