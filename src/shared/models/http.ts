import { CustomResponseStatus } from '../enums/http';

export type RequestResultStatus =
	| CustomResponseStatus.Success
	| CustomResponseStatus.Fail
	| CustomResponseStatus.None;

export interface CustomResponseResult {
	status: RequestResultStatus;
	value: string;
}
