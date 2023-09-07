import { CSSProperties, FC, ReactElement, useState } from 'react';
import './Login.scss';
import { ERROR, URL_API, noneCRR } from 'src/shared/constants/http';
import axios from 'axios';
import { Button } from 'src/common/Button/Button';
import { BUTTON_TEXT } from 'src/shared/constants/button';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN_FORM } from 'src/shared/constants/login';
import { CustomResponseStatus } from 'src/shared/enums/http';
import { CustomResponseResult } from 'src/shared/models/http';
import { RoutePath } from 'src/shared/enums/router';
import { user } from 'src/assets/mocks/user';
import { User } from 'src/shared/models/user';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
	FormLoginValues,
	initialValues,
	validationLoginSchema,
} from 'src/shared/models/login';
import { useDispatch } from 'react-redux';
import { addUser } from 'src/store/user/actions';

export const Login: FC = (): ReactElement => {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const [requestResult, setRequestResult] =
		useState<CustomResponseResult>(noneCRR);

	const handleSubmit = async (
		values: FormLoginValues,
		{ setSubmitting, resetForm }: any
	) => {
		try {
			const response = await axios.post(`${URL_API}/login`, {
				email: values.email,
				password: values.password,
			});

			localStorage.setItem('token', response.data.result);
			defineUserData(response.data.user);

			resetForm();
			setSubmitting(false);
			setRequestResult({
				status: CustomResponseStatus.Success,
				value: LOGIN_FORM.SUCCESS_MESSAGE,
			});
			navigate(RoutePath.Courses, { replace: true });
		} catch (error) {
			setSubmitting(false);
			setRequestResult({
				status: CustomResponseStatus.Fail,
				value: ERROR.MESSAGE,
			});
		}
	};

	const defineUserData = (currentUser: User) => {
		const user = {
			name: currentUser.name,
			isAdmin: true,
			isLogin: true,
			email: currentUser.email,
			token: currentUser.token,
		};

		dispatch(addUser(user));
	};

	const customButtonStyle: CSSProperties = {
		width: '40rem',
	};

	const CustomErrorMessage = ({ name, className }: any) => (
		<ErrorMessage name={name}>
			{(msg: string) => <div className={className}>{msg}</div>}
		</ErrorMessage>
	);

	return (
		<div className='login'>
			<div className='login__title'>{LOGIN_FORM.TITLE}</div>
			<Formik
				initialValues={initialValues}
				validationSchema={validationLoginSchema}
				onSubmit={handleSubmit}
			>
				{({ isSubmitting }) => (
					<Form className='form-login'>
						<div className='form-login__group'>
							<label className='form-login__label'>Email:</label>
							<Field
								className='form-login__input'
								type='email'
								name='email'
								placeholder='Enter your email'
							/>
							<CustomErrorMessage name='email' className='form-login__error' />
						</div>

						<div className='form-login__group'>
							<label className='form-login__label'>Password:</label>
							<Field
								className='form-login__input'
								type='password'
								name='password'
								placeholder='Enter your password'
							/>
							<CustomErrorMessage
								name='password'
								className='form-login__error'
							/>
						</div>

						<Button
							type='submit'
							text={BUTTON_TEXT.LOGIN}
							className='button'
							style={customButtonStyle}
							disabled={isSubmitting}
						></Button>

						<p className='form-login__message'>
							Don't have an account?{' '}
							<Link className='form-login__link' to='/registration'>
								Register here
							</Link>
						</p>
					</Form>
				)}
			</Formik>

			<div className='login__response'>
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
			</div>
		</div>
	);
};
