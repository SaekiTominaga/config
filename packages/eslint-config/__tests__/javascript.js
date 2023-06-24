export default class Test {
	#foo;

	/**
	 * @param foo - foo
	 */
	constructor(foo) {
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
	func(foo, bar) {
		this.#foo = foo;

		return `${foo}${bar}`;
	}
}
