import { Button } from 'src/common/Button/Button';
import './Registration.scss';
import { CSSProperties, FC, FormEvent, ReactElement, useState } from 'react';
import { Input } from 'src/common/Input/Input';
import { BUTTON_TEXT } from 'src/shared/constants/button';
import { REGISTRATION_FORM } from 'src/shared/constants/registration';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ERROR, URL_API, noneCRR } from 'src/shared/constants/http';
import { CustomResponseStatus } from 'src/shared/enums/http';
import { CustomResponseResult } from 'src/shared/models/http';
import { RoutePath } from 'src/shared/enums/router';

export const Registration: FC = (): ReactElement => {
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [nameError, setNameError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const [requestResult, setRequestResult] =
		useState<CustomResponseResult>(noneCRR);

	const changeInputName = (value: string) => {
		setName(value);
		setNameError('');
		setRequestResult(noneCRR);
	};

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

		if (!name) {
			setNameError('Name is required');
			isValid = false;
		}

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
				const response = await axios.post(`${URL_API}/register`, {
					name,
					email,
					password,
				});
				setRequestResult({
					status: CustomResponseStatus.Success,
					value: response.data.result,
				});

				navigate(RoutePath.Login, { replace: true });
			} catch (error) {
				console.error(error);
				setRequestResult({
					status: CustomResponseStatus.Fail,
					value: ERROR.MESSAGE,
				});
			}
		}
	};

	const customButtonStyle: CSSProperties = {
		width: '40rem',
	};

	return (
		<div className='registration'>
			<div className='registration__title'>{REGISTRATION_FORM.TITLE}</div>
			<form className='form-registration' onSubmit={handleSubmit}>
				<Input
					label='Name:'
					type='text'
					error={nameError}
					placeholder={REGISTRATION_FORM.PLACEHOLDER}
					onInputChange={changeInputName}
				/>
				<Input
					label='Email:'
					type='email'
					error={emailError}
					placeholder={REGISTRATION_FORM.PLACEHOLDER}
					onInputChange={changeInputEmail}
				/>
				<Input
					label='Password:'
					type='password'
					error={passwordError}
					placeholder={REGISTRATION_FORM.PLACEHOLDER}
					onInputChange={changeInputPassword}
				/>
				<Button
					text={BUTTON_TEXT.LOGIN}
					type='submit'
					style={customButtonStyle}
				/>

				<p className='form-registration__message'>
					{REGISTRATION_FORM.MESSAGE}
					<Link className='form-registration__link' to={RoutePath.Login}>
						Login
					</Link>
				</p>

				{requestResult.status !== CustomResponseStatus.None && (
					<p
						className={
							requestResult.status === CustomResponseStatus.Success
								? 'form-registration__request-result_success'
								: 'form-registration__request-result_fail'
						}
					>
						{requestResult.value}
					</p>
				)}
			</form>
		</div>
	);
};
