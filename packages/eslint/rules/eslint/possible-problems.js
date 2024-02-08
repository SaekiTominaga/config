module.exports = {
	rules: {
		'no-await-in-loop': 'error',
		'no-irregular-whitespace': [
			'error',
			{
				skipComments: true,
				skipRegExps: true,
				skipTemplates: true,
			},
		],
	},
};
