import { URL_API } from 'src/shared/constants/http';
import { httpProvider } from './httpService';
import { AuthorRequest } from 'src/shared/models/author';

export const fetchAuthorsAPI = async () => {
	return httpProvider.get(`${URL_API}/authors/all`);
};

export const createAuthorAPI = async (author: AuthorRequest) => {
	return httpProvider.post(`${URL_API}/authors/add`, author);
};
