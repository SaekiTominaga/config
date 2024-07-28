const obj = {
	bar: 'bar',
};

const { bar } = obj?.foo;
export const exp = obj?.foo + bar; // disallowArithmeticOperators
