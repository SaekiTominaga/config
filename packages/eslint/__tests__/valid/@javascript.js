import fs from 'node:fs';

await fs.promises.readFile('./@javascript.js');

export default class Test {
	#foo;

	/**
	 * @param {string} foo - foo
	 */
	constructor(foo) {
		this.#foo = foo;
	}

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
