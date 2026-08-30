const func1 = () => '';

/**
 * @deprecated need to restart the experiment
 * @returns {string} empty string
 */
const funcDeprecated = () => '';

class Class1 {
	#foo = 'foo';

	get foo() {
		return this.#foo;
	}
}

export { func1, funcDeprecated, Class1 };
