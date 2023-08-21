import { mockedAuthorsList } from 'src/assets/mocks/courses';

export const getCourseAuthors = (authors: string[]): string => {
	const authorNames = mockedAuthorsList
		.filter((author) => authors.includes(author.id))
		.map((author) => author.name);

	return authorNames.join(', ');
};
