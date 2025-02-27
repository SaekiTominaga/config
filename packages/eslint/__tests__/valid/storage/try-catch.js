let foo;
try {
	// eslint-disable-next-line no-undef
	foo = sessionStorage.getItem('foo');
} catch {}

export const exportFoo = foo;
