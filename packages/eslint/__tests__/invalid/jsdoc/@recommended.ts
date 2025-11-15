export default class {
	readonly #foo = '';

	/**
	 * func
	 *
	 * @returns {string} foo
	 */
	func() {
		return this.#foo;
	}
}
