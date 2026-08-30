let string = 'foo';
if (typeof string === 'string') {
	string = 0; // Error `ts(2322)`, but `type-checking` is disabled, this does not result in an oxlint error
}

export const exportString = string;
