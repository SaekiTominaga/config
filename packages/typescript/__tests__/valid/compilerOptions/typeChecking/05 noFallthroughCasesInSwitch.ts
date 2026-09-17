export default (a: number) => {
	let type: string | undefined;

	switch (a) {
		case 0: {
			type = 'even';
			break;
		}
		case 1: {
			type = 'odd';
			break;
		}
		default:
	}

	return type;
};
