let fooStr: string | undefined;
try {
	fooStr = 'aaa';
} catch (e) {}

export const foo = fooStr;
