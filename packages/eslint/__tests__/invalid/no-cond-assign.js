let foo = 'manager';
if ((foo = 'manager')) {
	/**/
}

export const bar = foo;
export const baz = ''; // import/prefer-default-export 対策
