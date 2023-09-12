import { URL_API } from 'src/shared/constants/http';

import { httpProvider } from './httpService';

export const fetchUserAPI = async () => {
	return httpProvider.get(`${URL_API}/users/me`);
};

export const logoutUserAPI = async () => {
	return httpProvider.delete(`${URL_API}/logout`);
};
