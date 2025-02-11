/** @type {import("eslint").Linter.Config} */
export default {
	rules: {
		'line-comment-position': [
			'error',
			{
				position: 'beside',
				ignorePattern: '@ts-',
			},
		],
		'unicode-bom': 'error',
	},
};
