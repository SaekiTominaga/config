/* allowNullableBoolean */
export const boolFunc = (bool?: boolean): boolean => {
	if (bool) {
		return bool;
	}

	return false;
};

/* allowNullableObject */
export const objFunc = (obj?: object): object => {
	if (obj !== undefined) {
		return obj;
	}

	return {};
};

/* allowNumber */
export const numFunc = (num: number): number => {
	if (num !== 0) {
		return num;
	}

	return 0;
};

/* allowString */
export const strFunc = (str: string): string => {
	if (str !== '') {
		return str;
	}

	return '';
};
