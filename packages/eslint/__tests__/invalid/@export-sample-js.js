export const func1 = () => '';

export const func2 = () => '';

/**
 * @deprecated need to restart the experiment
 * @returns {string} empty string
 */
export const funcDeprecated = () => '';

export class Class1 {
	#foo = 'foo';

	get foo() {
		return this.#foo;
	}
}
