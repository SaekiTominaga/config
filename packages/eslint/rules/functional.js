/* eslint-disable jsdoc/lines-before-block */

/** @type {import("eslint").Linter.Config} */
export default {
	rules: {
		/**
		 * Currying
		 */
		'functional/functional-parameters': [
			'error',
			{
				enforceParameterCount: false,
			},
		] /* ☑️ ✅ 🔒 */,

		/**
		 * No Exceptions
		 */
		/* no-promise-reject */
		'functional/no-throw-statements': 'off' /* ☑️ ✅ 🔒 */,
		/* 🔒 no-try-statements */

		/**
		 * No Mutations
		 */
		'functional/immutable-data': 'off' /* ☑️ ✅ 🔒 */,
		'functional/no-let': 'off' /* ☑️ ✅ 🔒 */,
		'functional/prefer-immutable-types': 'off' /* ☑️ ✅ 🔒 */,
		/* [❌ Deprecated] prefer-readonly-type */
		/* ☑️ ✅ 🔒 type-declaration-immutability */

		/**
		 * No Other Paradigms
		 */
		'functional/no-class-inheritance': 'off' /* ☑️ ✅ 🔒 */,
		'functional/no-classes': 'off' /* ✅ 🔒 */,
		/* ☑️ ✅ 🔒 no-mixed-types */
		/* 🔒 no-this-expressions */

		/**
		 * No Statements
		 */
		'functional/no-conditional-statements': 'off' /* ✅ 🔒 */,
		'functional/no-expression-statements': 'off' /* ✅ 🔒 */,
		/* ☑️ ✅ 🔒 no-loop-statements */
		'functional/no-return-void': 'off' /* ☑️ ✅ 🔒 */,

		/**
		 * Stylistic
		 */
		/* 🎨 prefer-property-signatures */
		/* 🎨(⚠️) prefer-tacit */
		/* 🎨 readonly-type */
	},
};
