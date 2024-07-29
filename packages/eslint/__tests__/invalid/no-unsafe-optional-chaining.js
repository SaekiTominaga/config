const obj = {
	bar: 'bar',
};

const { bar } = obj?.foo;
export default obj?.foo + bar; // disallowArithmeticOperators
