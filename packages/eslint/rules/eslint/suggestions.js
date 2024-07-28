// @ts-check

/** @type {import("eslint").Linter.FlatConfig} */
export default {
	rules: {
		'arrow-body-style': 'error', // eslint-config-airbnb-base@15.0.0; es6
		'block-scoped-var': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'class-methods-use-this': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'consistent-return': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		curly: 'error',
		'default-case': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'default-case-last': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'default-param-last': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'dot-notation': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		eqeqeq: 'error',
		'grouped-accessor-pairs': ['error', 'getBeforeSet'],
		'guard-for-in': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'max-classes-per-file': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-alert': 'warn', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-caller': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-continue': 'error',
		'no-else-return': 'error',
		'no-empty': [
			'error',
			{
				allowEmptyCatch: true,
			},
		], // ✅
		'no-empty-function': 'error',
		'no-empty-static-block': 'error',
		'no-eval': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-extend-native': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-extra-bind': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-extra-label': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-invalid-this': 'error',
		'no-iterator': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-labels': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-lone-blocks': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-loop-func': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-multi-str': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-new': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-new-func': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-new-wrappers': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-object-constructor': 'error',
		'no-octal-escape': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-param-reassign': [
			'error',
			{
				props: false,
			},
		],
		'no-proto': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-return-assign': ['error', 'always'], // eslint-config-airbnb-base@15.0.0; best-practices
		'no-script-url': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-sequences': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-throw-literal': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-useless-computed-key': 'error', // eslint-config-airbnb-base@15.0.0; es6
		'no-useless-constructor': 'error', // eslint-config-airbnb-base@15.0.0; es6
		'no-useless-rename': 'error', // eslint-config-airbnb-base@15.0.0; es6
		'no-unused-expressions': [
			'error',
			{
				allowShortCircuit: false,
				allowTernary: false,
				allowTaggedTemplates: false,
			},
		], // eslint-config-airbnb-base@15.0.0; best-practices
		'no-useless-call': 'error',
		'no-useless-concat': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-useless-return': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-var': 'error', // eslint-config-airbnb-base@15.0.0; es6
		'no-void': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'object-shorthand': ['error', 'methods'],
		'prefer-arrow-callback': 'error', // eslint-config-airbnb-base@15.0.0; es6
		'prefer-const': [
			'error',
			{
				destructuring: 'any',
				ignoreReadBeforeAssign: true,
			},
		], // eslint-config-airbnb-base@15.0.0; es6
		'prefer-destructuring': [
			'error',
			{
				VariableDeclarator: {
					array: false,
					object: true,
				},
				AssignmentExpression: {
					array: true,
					object: false,
				},
			},
		], // eslint-config-airbnb-base@15.0.0; es6
		'prefer-numeric-literals': 'error', // eslint-config-airbnb-base@15.0.0; es6
		'prefer-object-has-own': 'error',
		'prefer-promise-reject-errors': 'error',
		'prefer-regex-literals': [
			'error',
			{
				disallowRedundantWrapping: true,
			},
		], // eslint-config-airbnb-base@15.0.0; best-practices
		'prefer-rest-params': 'error', // eslint-config-airbnb-base@15.0.0; es6
		'prefer-spread': 'error', // eslint-config-airbnb-base@15.0.0; es6
		'prefer-template': 'error', // eslint-config-airbnb-base@15.0.0; es6
		radix: 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'require-await': 'error',
		strict: 'error',
		'symbol-description': 'error', // eslint-config-airbnb-base@15.0.0; es6
		yoda: 'error', // eslint-config-airbnb-base@15.0.0; best-practices
	},
};
