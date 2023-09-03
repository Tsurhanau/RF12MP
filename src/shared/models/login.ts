import * as Yup from 'yup';

export const validationLoginSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Email is required'),
	password: Yup.string().required('Password is required'),
});

export interface FormLoginValues {
	email: string;
	password: string;
}

export const initialValues: FormLoginValues = {
	email: '',
	password: '',
};
