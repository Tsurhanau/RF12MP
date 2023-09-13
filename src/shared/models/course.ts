import { Author } from './author';

export interface CourseRequest {
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
}

export interface Course extends CourseRequest {
	id: string;
}

export interface CourseProps {
	courses?: Course[];
	authors: Author[];
}

export interface CourseCardProps {
	card: Course;
	authors: Author[];
	openCardInfo: (card: Course) => void;
}

export interface CourseInfoProps {
	selectedCourse?: Course;
	moveBack?: () => void;
}
