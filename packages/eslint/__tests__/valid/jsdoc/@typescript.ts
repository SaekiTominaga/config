export default class {
	#foo = '';

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

		return `${this.#foo}${String(bar)}`;
	}
}
