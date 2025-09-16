/* allowNullableObject */
export const objFunc = (obj?: object): object => {
	if (obj) {
		return obj;
	}

	return {};
};

/* allowNumber */
export const numFunc = (num: number): number => {
	if (num) {
		return num;
	}

	return 0;
};

/* allowString */
export const strFunc = (str: string): string => {
	if (str) {
		return str;
	}

	return '';
};
