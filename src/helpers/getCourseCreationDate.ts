export const getCourseCreationDate = (date: string): string => {
	const [month, day, year] = date.split('/');

	const formattedMonth = month.padStart(2, '0');
	const formattedDay = day.padStart(2, '0');

	return `${formattedDay}.${formattedMonth}.${year}`;
};
