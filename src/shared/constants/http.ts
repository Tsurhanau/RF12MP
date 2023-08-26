import { CustomResponseStatus } from '../enums/http';
import { CustomResponseResult } from '../models/http';

export const URL_API = 'http://localhost:4000';

export const ERROR = {
	MESSAGE: 'Something went wrong =(',
};

export const noneCRR: CustomResponseResult = {
	status: CustomResponseStatus.None,
	value: '',
};
