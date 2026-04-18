/** @type {import("eslint").Linter.Config} */
export default {
	rules: {
		'line-comment-position': [
			'error',
			{
				position: 'beside',
				ignorePattern: '@ts-',
			},
		], // ❌ deprecated
		'unicode-bom': 'error',
	},
};
