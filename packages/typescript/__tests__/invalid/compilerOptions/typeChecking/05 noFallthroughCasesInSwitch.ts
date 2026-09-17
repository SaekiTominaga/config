// oxlint-disable no-fallthrough

export default (a: number) => {
	let type: string | undefined;

	switch (a) {
		case 0: {
			type = 'even';
		}
		case 1: {
			type = 'odd';
			break;
		}
		default:
	}

	return type;
};
