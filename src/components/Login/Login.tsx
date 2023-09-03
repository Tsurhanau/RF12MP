import { CSSProperties, FC, FormEvent, ReactElement, useState } from 'react';
import './Login.scss';
import { ERROR, URL_API, noneCRR } from 'src/shared/constants/http';
import axios from 'axios';
import { Input } from 'src/common/Input/Input';
import { Button } from 'src/common/Button/Button';
import { BUTTON_TEXT } from 'src/shared/constants/button';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN_FORM } from 'src/shared/constants/login';
import { CustomResponseStatus } from 'src/shared/enums/http';
import { CustomResponseResult } from 'src/shared/models/http';
import { RoutePath } from 'src/shared/enums/router';
import { user } from 'src/assets/mocks/user';
import { User } from 'src/shared/models/user';

export const Login: FC = (): ReactElement => {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const [requestResult, setRequestResult] =
		useState<CustomResponseResult>(noneCRR);

	const changeInputEmail = (value: string) => {
		setEmail(value);
		setEmailError('');
		setRequestResult(noneCRR);
	};

	const changeInputPassword = (value: string) => {
		setPassword(value);
		setPasswordError('');
		setRequestResult(noneCRR);
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		let isValid = true;

		if (!email) {
			setEmailError('Email is required');
			isValid = false;
		}

		if (!password) {
			setPasswordError('Password is required');
			isValid = false;
		}

		if (isValid) {
			try {
				const response = await axios.post(`${URL_API}/login`, {
					email,
					password,
				});
				setRequestResult({
					status: CustomResponseStatus.Success,
					value: LOGIN_FORM.SUCCESS_MESSAGE,
				});

				localStorage.setItem('token', response.data.result);

				defineUserData(response.data.user);

				navigate(RoutePath.Courses, { replace: true });
			} catch (error) {
				console.error(error);
				setRequestResult({
					status: CustomResponseStatus.Fail,
					value: ERROR.MESSAGE,
				});
			}
		}
	};

	const defineUserData = (currentUser: User) => {
		user.name = currentUser.name;
		user.isLogin = true;
	};

	const customButtonStyle: CSSProperties = {
		width: '40rem',
	};

	return (
		<div className='login'>
			<div className='login__title'>{LOGIN_FORM.TITLE}</div>
			<form className='form-login' onSubmit={handleSubmit}>
				<Input
					label='Email:'
					type='email'
					error={emailError}
					placeholder={LOGIN_FORM.PLACEHOLDER}
					onInputChange={changeInputEmail}
				/>
				<Input
					label='Password:'
					type='password'
					error={passwordError}
					placeholder={LOGIN_FORM.PLACEHOLDER}
					onInputChange={changeInputPassword}
				/>
				<Button
					text={BUTTON_TEXT.LOGIN}
					type='submit'
					style={customButtonStyle}
				/>

				<p className='form-login__message'>
					{LOGIN_FORM.MESSAGE}
					<Link className='form-login__link' to={RoutePath.Registration}>
						<span>Registration</span>
					</Link>
				</p>

				{requestResult.status !== CustomResponseStatus.None && (
					<p
						className={
							requestResult.status === CustomResponseStatus.Success
								? 'form-login__request-result_success'
								: 'form-login__request-result_fail'
						}
					>
						{requestResult.value}
					</p>
				)}
			</form>
		</div>
	);
};
