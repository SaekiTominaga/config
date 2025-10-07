const list = ['a', 'b', 'c'];

// eslint-disable-next-line no-undef-init
let value: number | undefined = undefined;

if (list.includes('a')) {
	value = 1;
} else {
	value = 2;
}

export const foo = value;
