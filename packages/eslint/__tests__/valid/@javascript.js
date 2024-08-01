import fs from 'node:fs';

await fs.promises.readFile('./@javascript.js');

export default class Test {
	#foo;

	constructor(foo) {
		this.#foo = foo;
	}

	func(foo, bar) {
		this.#foo = foo;

		return `${this.#foo}${bar}`;
	}
}
