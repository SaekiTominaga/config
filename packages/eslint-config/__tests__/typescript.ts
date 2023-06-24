export default class Test {
	#foo: string;

	/**
	 * @param foo - foo
	 */
	constructor(foo: string) {
		this.#foo = foo;
	}

	/**
	 * func
	 *
	 * @param foo - foo
	 * @param bar - bar
	 *
	 * @returns foo
	 */
	func(foo: string, bar: number): string {
		this.#foo = foo;

		return `${foo}${bar}`;
	}
}
