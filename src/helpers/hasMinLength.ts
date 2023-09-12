export const hasMinLength = <T>(
	value: T[] | string | number,
	minLength: number
): boolean => {
	if (Array.isArray(value)) {
		return value.length >= minLength;
	}
	if (typeof value === 'string') {
		return value.length >= minLength;
	}
	if (typeof value === 'number') {
		return value.toString().length >= minLength;
	}
	return false;
};
