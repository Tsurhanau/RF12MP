export interface Course {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
}

export interface CourseProps {
	courses: Course[];
}

export interface CourseCardProps {
	card: Course;
	openCardInfo: (card: Course) => void;
}

export interface CourseInfoProps {
	selectedCourse?: Course;
	moveBack?: () => void;
}
