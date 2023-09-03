import { FormEvent } from 'react';

export interface Author {
	id: string;
	name: string;
}

export interface AuthorItemProps {
	author: Author;
	add: (author: Author, event?: FormEvent<HTMLButtonElement>) => void;
	remove: (author: Author, event?: FormEvent<HTMLButtonElement>) => void;
}
