export default class {
	#foo = '';

	/**
	 * func
	 *
	 * @param {string} foo - foo
	 * @param {number} bar - bar
	 *
	 * @returns {string} foo
	 */
	func(foo, bar) {
		this.#foo = foo;

		return `${this.#foo}${bar}`;
	}
}
