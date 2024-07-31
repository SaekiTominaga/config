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

		return `${foo}${String(bar)}`;
	}
}
