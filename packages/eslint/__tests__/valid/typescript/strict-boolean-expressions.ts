export const strFunc = (str: string): string => {
	if (str !== '') {
		return str;
	}

	return '';
};

export const numFunc = (num: number): number => {
	if (num !== 0) {
		return num;
	}

	return 0;
};
