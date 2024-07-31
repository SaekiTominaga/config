export default class {
	#foo = '';

	/**
	 * func
	 * @param {string} bar - bar
	 * @param {string} baz - baz
	 * @returns {string} foo
	 */
	func(bar, baz) {
		return `${this.#foo}${bar}${baz}`;
	}
}
