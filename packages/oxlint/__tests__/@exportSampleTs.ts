type Type1 = 'foo';

const func1 = () => '';

/**
 * @deprecated need to restart the experiment
 * @returns empty string
 */
const funcDeprecated = () => '';

class Class1 {
	readonly #foo = 'foo';

	get foo() {
		return this.#foo;
	}
}

export { type Type1, func1, funcDeprecated, Class1 };
