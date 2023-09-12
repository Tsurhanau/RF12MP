import axios from 'axios';
import { URL_API } from 'src/shared/constants/http';
import { getTokenFromStorage } from './authService';

export const httpProvider = axios.create({
	baseURL: URL_API,
});

httpProvider.interceptors.request.use((config) => {
	const token = getTokenFromStorage();
	if (token) {
		config.headers['Authorization'] = token;
	}
	return config;
});
