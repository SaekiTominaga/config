/** @type {import("eslint").Linter.Config} */
export default {
	rules: {
		'arrow-body-style': 'error', // eslint-config-airbnb-base@15.0.0; es6
		'block-scoped-var': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		camelcase: [
			'error',
			{
				properties: 'never',
			},
		], // eslint-config-airbnb-base@15.0.0; style
		'class-methods-use-this': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'consistent-return': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		curly: 'error',
		'default-case': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'default-case-last': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'default-param-last': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'dot-notation': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		eqeqeq: 'error',
		'func-names': 'warn', // eslint-config-airbnb-base@15.0.0; style
		'func-style': 'error',
		'grouped-accessor-pairs': ['error', 'getBeforeSet'],
		'guard-for-in': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'logical-assignment-operators': 'error',
		'max-classes-per-file': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'new-cap': 'error',
		'no-alert': 'warn', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-array-constructor': 'error', // eslint-config-airbnb-base@15.0.0; style
		'no-bitwise': 'error', // eslint-config-airbnb-base@15.0.0; style
		'no-caller': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
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
		'no-label-var': 'error', // eslint-config-airbnb-base@15.0.0; variables
		'no-labels': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-lone-blocks': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-lonely-if': 'error', // eslint-config-airbnb-base@15.0.0; style
		'no-loop-func': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-multi-assign': 'error', // eslint-config-airbnb-base@15.0.0; style
		'no-multi-str': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-nested-ternary': 'error', // eslint-config-airbnb-base@15.0.0; style
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
		'no-plusplus': 'error', // eslint-config-airbnb-base@15.0.0; style
		'no-proto': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-restricted-globals': ['error', 'isFinite', 'isNaN'], // eslint-config-airbnb-base@15.0.0; variables
		'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'], // eslint-config-airbnb-base@15.0.0; style
		'no-return-assign': ['error', 'always'], // eslint-config-airbnb-base@15.0.0; best-practices
		'no-script-url': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-sequences': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-shadow': 'error', // eslint-config-airbnb-base@15.0.0; variables
		'no-throw-literal': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-undef-init': 'error', // eslint-config-airbnb-base@15.0.0; variables
		'no-underscore-dangle': 'error', // eslint-config-airbnb-base@15.0.0; style
		'no-unneeded-ternary': [
			'error',
			{
				defaultAssignment: false,
			},
		], // eslint-config-airbnb-base@15.0.0; style
		'no-unused-expressions': [
			'error',
			{
				allowShortCircuit: false,
				allowTernary: false,
				allowTaggedTemplates: false,
			},
		], // eslint-config-airbnb-base@15.0.0; best-practices
		'no-use-before-define': 'error', // eslint-config-airbnb-base@15.0.0; variables
		'no-useless-computed-key': 'error', // eslint-config-airbnb-base@15.0.0; es6
		'no-useless-constructor': 'error', // eslint-config-airbnb-base@15.0.0; es6
		'no-useless-rename': 'error', // eslint-config-airbnb-base@15.0.0; es6
		'no-useless-call': 'error',
		'no-useless-concat': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-useless-return': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'no-var': 'error', // eslint-config-airbnb-base@15.0.0; es6
		'no-void': 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'object-shorthand': ['error', 'methods'],
		'one-var': ['error', 'never'], // eslint-config-airbnb-base@15.0.0; style
		'operator-assignment': ['error', 'always'], // eslint-config-airbnb-base@15.0.0; style
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
		'prefer-exponentiation-operator': 'error', // eslint-config-airbnb-base@15.0.0; style
		'prefer-numeric-literals': 'error', // eslint-config-airbnb-base@15.0.0; es6
		'prefer-object-has-own': 'error',
		'prefer-object-spread': 'error', // eslint-config-airbnb-base@15.0.0; style
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
		'preserve-caught-error': 'error', // ESLint 10 recommended candidate https://github.com/eslint/eslint/issues/19966
		radix: 'error', // eslint-config-airbnb-base@15.0.0; best-practices
		'require-await': 'error',
		'require-unicode-regexp': 'error',
		strict: 'error',
		'symbol-description': 'error', // eslint-config-airbnb-base@15.0.0; es6
		yoda: 'error', // eslint-config-airbnb-base@15.0.0; best-practices
	},
};
