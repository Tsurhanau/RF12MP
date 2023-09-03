export const hasMinLength = <T>(
	value: T[] | string,
	minLength: number
): boolean => {
	if (Array.isArray(value)) {
		return value.length >= minLength;
	}
	if (typeof value === 'string') {
		return value.length >= minLength;
	}
	return false;
};
