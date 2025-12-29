let foo;
try {
	foo = sessionStorage.getItem('foo');
} catch {}

export const exportFoo = foo;
