export const getCourseDuration = (minutes: number): string => {
	const hours = Math.floor(minutes / 60);
	const mins = minutes % 60;

	const formattedHours = hours < 10 ? `0${hours}` : hours.toString();
	const formattedMins = mins < 10 ? `0${mins}` : mins.toString();

	const hourLabel = hours === 1 ? 'hour' : 'hours';

	if (hours > 0 && mins > 0) {
		return `${formattedHours}:${formattedMins} ${hourLabel}`;
	} else if (hours > 0) {
		return `${formattedHours} ${hourLabel}`;
	} else {
		return `${formattedMins} minutes`;
	}
};
