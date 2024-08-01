import fs from 'node:fs';

await fs.promises.readFile('./@typescript.ts');

export default class Test {
	#foo: string;

	constructor(foo: string) {
		this.#foo = foo;
	}

	func(foo: string, bar: number): string {
		this.#foo = foo;

		return `${foo}${String(bar)}`;
	}
}
