/* import/export */

export default class MyClass {
} // Multiple default exports.

/**
 * @returns {MyClass} MyClass
 */
function makeClass() {
	return new MyClass();
}

export default makeClass; // Multiple default exports.
