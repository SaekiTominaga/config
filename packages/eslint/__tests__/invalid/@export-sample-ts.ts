export type Type1 = 'foo';

export const func1 = () => '';

/**
 * @deprecated need to restart the experiment
 * @returns empty string
 */
export const funcDeprecated = () => '';

export class Class1 {
	readonly #foo = 'foo';

	get foo() {
		return this.#foo;
	}
}
