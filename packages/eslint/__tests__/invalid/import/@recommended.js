/* import/export */

export default class MyClass {
} // Multiple default exports.

const makeClass = () => new MyClass();

export default makeClass; // Multiple default exports.
