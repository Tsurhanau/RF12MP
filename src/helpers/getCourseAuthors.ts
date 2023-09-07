import { Author } from 'src/shared/models/author';

export const getCourseAuthors = (
	authors: string[],
	authorsList: Author[]
): string => {
	const authorNames = authorsList
		.filter((author) => authors.includes(author.id))
		.map((author) => author.name);

	return authorNames.join(', ');
};
