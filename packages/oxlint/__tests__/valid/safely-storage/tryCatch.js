let foo;
try {
	foo = localStorage.getItem('foo');
} catch {}

export const exportFoo = foo;
